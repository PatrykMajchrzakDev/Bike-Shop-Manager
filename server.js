const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const mainRoutes = require("./routes/main");
const apiRoutes = require("./routes/api");
const connectDB = require("./config/database");
const flash = require("express-flash");
const logger = require("morgan");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

// !!IMPORTANT TO BE FIRST!! Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

//Connect do database
connectDB();

// Passport config
require("./config/passport")(passport);

//Using EJS for views
app.set("view engine", "ejs");

//Static folder
app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//logging
app.use(logger("dev"));

//Use flash messages for errors, info, ect...
app.use(flash());

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Setup Routes for which the server is listening
app.use("/", mainRoutes);
app.use("/api", apiRoutes);

//Server Running
app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});
