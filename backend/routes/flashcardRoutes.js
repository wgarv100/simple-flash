const express = require("express");
const router = express.Router();

const flashcardController = require("../controllers/flashcardController");

router.post("/:groupId/flashcards", flashcardController.createFlashcard);
router.get("/:groupId/flashcards", flashcardController.getFlashcardsInGroup);
router.delete(
  "/:groupId/flashcards/:flashcardId",
  flashcardController.deleteFlashcardByGroup
);

module.exports = router;
