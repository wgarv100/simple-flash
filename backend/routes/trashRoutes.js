const express = require("express");
const router = express.Router();

const trashController = require("../controllers/trashController");

router.get("/", trashController.getDeletedGroups);
router.get("/:groupId", trashController.getDeletedGroupFlashcards);
router.put("/:groupId", trashController.moveGroupToTrash);
router.put("/restore/:groupId", trashController.restoreGroupFromTrash);

module.exports = router;
