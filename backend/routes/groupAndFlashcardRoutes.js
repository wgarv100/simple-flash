const express = require("express");
const router = express.Router();

const flashcardController = require("../controllers/flashcardController");
const groupController = require("../controllers/groupController");

// Flashcard
router.post("/:groupId/flashcards", flashcardController.createFlashcard);
router.get("/:groupId/flashcards", flashcardController.getFlashcardsInGroup);
router.delete(
  "/:groupId/flashcards/:flashcardId",
  flashcardController.deleteFlashcardByGroup
);

// Group
router.post("/", groupController.createGroup);
router.get("/", groupController.getAllGroups);
router.delete("/:groupId", groupController.deleteGroup);

module.exports = router;
