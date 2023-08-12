const express = require("express");
const router = express.Router();
const flashcardController = require("../controllers/flashcardController");

// router.get("/", flashcardController.getFlashcards);

router.post("/", flashcardController.postFlashcards);

module.exports = router;
