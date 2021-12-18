const express = require("express");
const router = express.Router();
const product = require("./detail");
const feedback = require("./feedback");
const allProduct = require("./allProduct");
const addProduct = require("./addProduct");
const delFeedback = require("./delFeeback");
router.get("/", (req, res) => {
  res.render("../views/index.ejs");
});
router.use("/detail", product);
router.use("/feedback", feedback);
router.use("/allproduct", allProduct);
router.use("/addproduct", addProduct);
router.use("/addproduct", addProduct);
router.use("/delete", delFeedback);
module.exports = router;
