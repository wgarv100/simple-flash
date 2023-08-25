const express = require("express");
const router = express.Router();

const groupController = require("../controllers/groupController");

router.post("/", groupController.createGroup);
router.get("/", groupController.getAllGroups);
router.delete("/:groupId", groupController.deleteGroup);

module.exports = router;
