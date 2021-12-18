const express = require("express");
const router = express.Router();
const feedbackController = require("../controller/feedbackController");
router.get("/", feedbackController.deleteFeedback);
module.exports = router;
