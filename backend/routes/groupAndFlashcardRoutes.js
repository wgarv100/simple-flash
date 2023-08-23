const express = require("express");
const router = express.Router();

const groupAndFlashcardController = require("../controllers/groupAndFlashcardController");

router.get("/", groupAndFlashcardController.getAllGroups);

router.get(
  "/:groupId/flashcards",
  groupAndFlashcardController.getFlashcardsInGroup
);

router.post("/", groupAndFlashcardController.createGroup);

router.post(
  "/:groupId/flashcards",
  groupAndFlashcardController.createFlashcard
);

router.delete("/:groupId", groupAndFlashcardController.deleteGroup);

module.exports = router;
