const express = require("express");
const router = express.Router();

const flashcardController = require("../controllers/flashcardController");

router.post("/:groupId", flashcardController.createFlashcard);
router.get("/:groupId", flashcardController.getFlashcardsInGroup);
router.delete(
  "/:groupId/:flashcardId",
  flashcardController.deleteFlashcardByGroup
);

module.exports = router;
