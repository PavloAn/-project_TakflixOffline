const express = require("express");
const path = require("path");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: path.join(__dirname, "../.env") });
}

require("./db/mongoose");

// Routes
const userRouter = require("./routes/users");
const movieRouter = require("./routes/movies");
const cinemaRouter = require("./routes/cinema");
const showtimeRouter = require("./routes/showtime");
const reservationRouter = require("./routes/reservation");
const invitationsRouter = require("./routes/invitations");

const app = express();
app.disable("x-powered-by");
const port = process.env.PORT || 8080;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../../frontend/build")));
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization"
  );

  next();
});
app.use(express.json());
app.use(userRouter);
app.use(movieRouter);
app.use(cinemaRouter);
app.use(showtimeRouter);
app.use(reservationRouter);
app.use(invitationsRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "../../frontend/build/index.html"));
});
app.listen(port, () => console.log(`app is running in PORT: ${port}`));