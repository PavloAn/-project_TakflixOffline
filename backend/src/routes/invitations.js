const express = require("express");
const auth = require("../middlewares/auth");
const mail = require("../utils/mail");

const router = new express.Router();

const createMailOptions = (data) => {
  const { to, host, movie, date, time, cinema, image, seat } = data;

  const htmlContent = `
                <h1><strong>Запрошення для фільму</strong></h1>
                <p>Привіт, вас запросив ${host}</p>
                <p>Назва фільму: ${movie}</p>
                <p>Дата: ${date}</p>
                <p>Час: ${time}</p>
                <p>Зал: ${cinema}</p>
                <p>Місце: ${seat}</p>
                <img src="${image}" alt="cinema Image"/>
                <br/>
              `;
  return {
    from: "takflix.offline@gmail.com",
    to,
    subject: "Takflix Offline Invitation",
    html: htmlContent,
  };
};

// Send Invitation Emails
router.post("/invitations", auth.simple, async (req, res) => {
  const invitations = req.body;
  const promises = invitations.map((invitation) => {
    const mailOptions = createMailOptions(invitation);
    return mail
      .sendEMail(mailOptions)
      .then(() => ({
        success: true,
        msg: `Запрошення до ${mailOptions.to} відправлено!`,
      }))
      .catch((exception) => ({ success: false, msg: exception }));
  });

  Promise.all(promises).then((result) => res.status(201).json(result));
});
module.exports = router;