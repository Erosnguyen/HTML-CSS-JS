const express = require("express");
const router = express.Router();
const ProductRoute = require("../controller/detailController");
router.get("/", ProductRoute.allProductRoute);
module.exports = router;
