const express = require("express");
const router = express.Router();
const trashController = require("../controllers/trashController");

// Route to move a group to the trash can
router.put("/:groupId", trashController.moveGroupToTrash);

module.exports = router;
