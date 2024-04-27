const Group = require("../models/group");
const TrashcanGroup = require("../models/Trash");

// Read
exports.getDeletedGroups = async (req, res) => {
  try {
    const trashcanGroups = await TrashcanGroup.find();
    res.status(200).json(trashcanGroups);
  } catch (error) {
    console.error("Error getting deleted groups:", error);
    res.status(500).json({ error: "Failed to get deleted groups" });
  }
};

// Read
exports.getDeletedGroupFlashcards = async (req, res) => {
  try {
    const groupId = req.params.groupId;

    const trashcanGroup = await TrashcanGroup.findOne({
      originalId: groupId,
    }).populate("flashcards");

    if (!trashcanGroup) {
      return res.status(404).json({ error: "Deleted group not found" });
    }

    const flashcards = trashcanGroup.flashcards;

    res.status(200).json(flashcards);
  } catch (error) {
    console.error("Error fetching flashcards from deleted group:", error);
    res.status(500).json({
      error: "An error occurred while fetching flashcards from deleted group.",
    });
  }
};

// Update
exports.moveGroupToTrash = async (req, res) => {
  try {
    const groupId = req.params.groupId;
    const group = await Group.findById(groupId);

    if (!group) {
      console.log("group", group, groupId);

      return res.status(404).json({ error: "Group not found" });
    }

    const trashcanGroup = new TrashcanGroup({
      originalId: group._id,
      name: group.name,
      flashcards: group.flashcards,
    });

    await trashcanGroup.save();

    await Group.findByIdAndDelete(groupId);

    res.status(200).json({ message: "Group moved to trashcan" });
  } catch (error) {
    console.error("Error moving group to trashcan:", error);
    res.status(500).json({ error: "Failed to move group to trashcan" });
  }
};

// Update
exports.restoreGroupFromTrash = async (req, res) => {
  try {
    const groupId = req.params.groupId;
    const trashcanGroup = await TrashcanGroup.findOne({
      originalId: groupId,
    });

    if (!trashcanGroup) {
      return res.status(404).json({ error: "Deleted group not found" });
    }

    const group = new Group({
      name: trashcanGroup.name,
      flashcards: trashcanGroup.flashcards,
    });

    await group.save();

    await TrashcanGroup.findByIdAndDelete(trashcanGroup._id);

    res.status(200).json({ message: "Group restored" });
  } catch (error) {
    console.error("Error restoring group:", error);
    res.status(500).json({ error: "Failed to restore group" });
  }
};
