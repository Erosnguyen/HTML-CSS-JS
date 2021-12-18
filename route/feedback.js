const express = require("express");
const router = express.Router();
const feedback = require("../controller/feedbackController.js");
router.post("/", feedback.postFB);
router.get("/", feedback.getFB);
module.exports = router;
