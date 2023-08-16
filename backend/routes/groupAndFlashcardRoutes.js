const express = require("express");
const router = express.Router();

const groupAndFlashcardController = require("../controllers/groupAndFlashcardController");

router.get("/", groupAndFlashcardController.getAllGroups);

router.post("/", groupAndFlashcardController.createGroup);

router.post(
  "/:groupId/flashcards",
  groupAndFlashcardController.createFlashcard
);

module.exports = router;
