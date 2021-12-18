const express = require("express");
const router = express.Router();
const addProductController = require("../controller/addproductController");
router.post("/", addProductController.addProduct);
router.get("/", addProductController.showProduct);
module.exports = router;
