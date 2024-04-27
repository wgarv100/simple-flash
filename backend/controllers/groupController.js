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

// Update
exports.updateGroup = async (req, res) => {
  try {
    const groupId = req.params.groupId;
    const updates = req.body;

    // Find the group by ID and update it
    const group = await Group.findByIdAndUpdate(groupId, updates, {
      new: true,
    });

    if (!group) {
      return res.status(404).json({ error: "Group not found" });
    }

    res.status(200).json(group);
  } catch (error) {
    console.error("Error updating group:", error);
    res
      .status(500)
      .json({ error: "An error occurred while updating the group." });
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
