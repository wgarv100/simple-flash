const Group = require("../models/group");

// Create
exports.createGroup = async (req, res) => {
  try {
    const { name } = req.body;

    const group = new Group({ name });
    await group.save();

    res.status(201).json(group);
  } catch (error) {
    console.error("Error creating group:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the group." });
  }
};

// Read
exports.getAllGroups = async (req, res) => {
  try {
    const groups = await Group.find();
    res.json(groups);
  } catch (error) {
    console.error("Error fetching groups:", error);
    res.status(500).json({ error: "An error occurred while fetching groups." });
  }
};

// Read
exports.getFlashcardsInGroup = async (req, res) => {
  try {
    const groupId = req.params.groupId;

    // Find the group by ID and populate the 'flashcards' field
    const group = await Group.findById(groupId).populate("flashcards");

    if (!group) {
      return res.status(404).json({ error: "Group not found" });
    }

    // Extract the flashcards array from the populated group
    const flashcards = group.flashcards;

    res.status(200).json(flashcards);
  } catch (error) {
    console.error("Error fetching flashcards:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching flashcards." });
  }
};

// Delete
exports.deleteGroup = async (req, res) => {
  try {
    const groupId = req.params.groupId;
    await Group.findByIdAndDelete(groupId);
    res.sendStatus(204);
  } catch (error) {
    console.error("Error deleting group:", error);
    res.status(500).json({ error: "Failed to delete group" });
  }
};
