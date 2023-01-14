const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
// const connectDB = require("./config/database");
const logger = require("morgan");

//Use .env file in config folder
require("dotenv").config({ path: ".config/.env" });

//Using EJS for views
app.set("view engine", "ejs");

//Static folder
app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//logging
app.use(logger("dev"));

//Server Running
app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
