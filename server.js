const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const mainRoutes = require("./routes/main");
const connectDB = require("./config/database");

// !!IMPORTANT TO BE FIRST!! Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

//Connect do database
connectDB();
console.log(process.env.DB_STRING);

// const connectDB = require("./config/database");
const logger = require("morgan");

//Using EJS for views
app.set("view engine", "ejs");

//Static folder
app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//logging
app.use(logger("dev"));

//Setup Routes for which the server is listening
app.use("/", mainRoutes);

//Server Running
app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});
