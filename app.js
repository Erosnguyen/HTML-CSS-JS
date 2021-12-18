// const html = require('./index.html')
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const route = require("./route/main");
const app = express();
dotenv.config();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//connectDb
const connectDB = require("./config/connectDB");

connectDB();
app.use(route);
app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});
