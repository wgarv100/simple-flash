const express = require("express");
const router = express.Router();
const flashcardController = require("../controllers/flashcardController");

router.get("/", flashcardController.getFlashcards);

router.post("/", flashcardController.postFlashcards);

router.delete("/:id", flashcardController.deleteFlashcard);

module.exports = router;
