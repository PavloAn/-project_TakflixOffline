const express = require("express");
const upload = require("../utils/multer");
const User = require("../models/user");
const auth = require("../middlewares/auth");

const router = new express.Router();

// CREATE USER
router.post("/users", async (req, res) => {
  try {
    const { role } = req.body;
    if (role) throw new Error("Ви не можете встановити властивість ролі.");
    const user = new User(req.body);
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

// CREATE USER PHOTO BY ID
router.post(
  "/users/photo/:id",
  upload("users").single("file"),
  async (req, res, next) => {
    const url = `${req.protocol}://${req.get("host")}`;
    const { file } = req;
    const userId = req.params.id;
    try {
      if (!file) {
        const error = new Error("Будь ласка, завантажте файл");
        error.httpStatusCode = 400;
        return next(error);
      }
      const user = await User.findById(userId);
      if (!user) return res.sendStatus(404);
      user.imageurl = `${url}/${file.path}`;
      await user.save();
      res.send({ user, file });
    } catch (e) {
      console.log(e);
      res.sendStatus(400).send(e);
    }
  }
);

// LOGIN
router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.username,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send({
      error: { message: "Ви ввели неправильне ім'я користувача або пароль!" },
    });
  }
});

// GOOGLE LOGIN
router.post("/users/login/google", async (req, res) => {
  const { email, googleId, name } = req.body;
  const nameArray = name.split(" ");

  const user = await User.findOne({ google: googleId });
  if (!user) {
    const newUser = new User({
      name,
      username: nameArray.join("") + googleId,
      email,
      google: googleId,
    });
    try {
      await newUser.save();
      const token = await newUser.generateAuthToken();
      res.status(201).send({ user: newUser, token });
    } catch (e) {
      res.status(400).send(e);
    }
  } else {
    const token = await user.generateAuthToken();
    res.send({ user, token });
  }
});

// USER LOGOUT
router.post("/users/logout", auth.simple, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send({});
  } catch (e) {
    res.status(400).send(e);
  }
});

// LOGOUT ALL
router.post("/users/logoutAll", auth.enhance, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(400).send(e);
  }
});

// GET ALL USERS (only for admin)
router.get("/users", auth.enhance, async (req, res) => {
  if (req.user.role !== "superadmin")
    return res.status(400).send({
      error: "Тільки 'superadmin' може бачити всіх користувачів!",
    });
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(400).send(e);
  }
});

// GET USER INFO
router.get("/users/me", auth.simple, async (req, res) => {
  try {
    res.send(req.user);
  } catch (e) {
    res.status(400).send(e);
  }
});

// GET USER BY ID (only for admin)
router.get("/users/:id", auth.enhance, async (req, res) => {
  if (req.user.role !== "superadmin")
    return res.status(400).send({
      error: "Тільки 'superadmin' може бачити користувача!",
    });
  const _id = req.params.id;
  try {
    const user = await User.findById(_id);
    if (!user) return res.sendStatus(404);
    res.send(user);
  } catch (e) {
    res.sendStatus(400);
  }
});

// EDIT/UPDATE USER
router.patch("/users/me", auth.simple, async (req, res) => {
  console.log(req.body);
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "phone", "username", "email", "password"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).send({ error: "Недійсні оновлення!" });

  try {
    const { user } = req;
    updates.forEach((update) => (user[update] = req.body[update]));
    await user.save();
    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

// UPDATE USER BY ID (only for admin)
router.patch("/users/:id", auth.enhance, async (req, res) => {
  if (req.user.role !== "superadmin")
    return res.status(400).send({
      error: "Тільки 'superadmin' може редагувати користувача!",
    });
  const _id = req.params.id;

  const updates = Object.keys(req.body);
  const allowedUpdates = [
    "name",
    "phone",
    "username",
    "email",
    "password",
    "role",
  ];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation)
    return res.status(400).send({ error: "Недійсні оновлення!" });

  try {
    const user = await User.findById(_id);
    updates.forEach((update) => (user[update] = req.body[update]));
    await user.save();

    if (!user) return res.sendStatus(404);
    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

// DELETE USER BY ID (only for admin)
router.delete("/users/:id", auth.enhance, async (req, res) => {
  if (req.user.role !== "superadmin")
    return res.status(400).send({
      error: "Тільки 'superadmin' може видалити користувача!",
    });
  const _id = req.params.id;

  try {
    const user = await User.findByIdAndDelete(_id);
    if (!user) return res.sendStatus(404);

    res.send({ message: "Користувача видалено" });
  } catch (e) {
    res.sendStatus(400);
  }
});

// DELETE USERS INFO (only for admin)
router.delete("/users/me", auth.simple, async (req, res) => {
  if (req.user.role !== "superadmin")
    return res.status(400).send({
      error: "Ви не можете видалити себе!",
    });
  try {
    await req.user.remove();
    res.send(req.user);
  } catch (e) {
    res.sendStatus(400);
  }
});

module.exports = router;