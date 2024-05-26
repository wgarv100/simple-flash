const express = require("express");
const router = express.Router();
const flashcardController = require("../controllers/flashcardController");

router.get("/:groupId", flashcardController.getFlashcardsInGroup);

module.exports = router;
