const Group = require("../models/group");
const TrashcanGroup = require("../models/Trash");

exports.getDeletedGroups = async (req, res) => {
  try {
    // Get all TrashcanGroup documents
    const trashcanGroups = await TrashcanGroup.find();
    res.status(200).json(trashcanGroups);
  } catch (error) {
    console.error("Error getting deleted groups:", error);
    res.status(500).json({ error: "Failed to get deleted groups" });
  }
};

exports.moveGroupToTrash = async (req, res) => {
  try {
    const groupId = req.params.groupId;
    const group = await Group.findById(groupId);

    if (!group) {
      console.log("group", group, groupId);

      return res.status(404).json({ error: "Group not found" });
    }

    // Create a new TrashcanGroup document
    const trashcanGroup = new TrashcanGroup({
      originalId: group._id,
      name: group.name,
      flashcards: group.flashcards,
      // Include any other properties you want to save
    });

    // Save the TrashcanGroup document
    await trashcanGroup.save();

    // Delete the original group
    await Group.findByIdAndDelete(groupId);

    res.status(200).json({ message: "Group moved to trashcan" });
  } catch (error) {
    console.error("Error moving group to trashcan:", error);
    res.status(500).json({ error: "Failed to move group to trashcan" });
  }
};
