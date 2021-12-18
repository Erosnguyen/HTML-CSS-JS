const express = require("express");
const router = express.Router();
const detailController = require("../controller/detailController");
router.get("/", detailController.productRoute);

module.exports = router;
