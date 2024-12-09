require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const bodyParser = require("body-parser");
const authRoute = require("./routes/auth");
const session = require("express-session"); 
const feedbackRoutes = require("./routes/feedback")
const passportStrategy = require("./passport");
const webhookRoutes = require("./routes/weebhook");
const app = express();

app.use(
  session({
    secret: "cyberwolve", // Secret key for signing the session cookie
    resave: false, 
    saveUninitialized: false,
    cookie: {
      httpOnly: true, // Ensures the cookie can't be accessed via JavaScript
      secure: process.env.NODE_ENV === "production", 
    },
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:5173", // React front-end URL
    credentials: true,
  })
);
app.use("/webhook", webhookRoutes);
app.use("/auth", authRoute);
app.use("/api", feedbackRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
