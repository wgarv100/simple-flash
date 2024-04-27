const Group = require("../models/group");
const TrashcanGroup = require("../models/Trash");

// Read
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

// Read
exports.getDeletedGroupFlashcards = async (req, res) => {
  try {
    const groupId = req.params.groupId;

    // Find the TrashcanGroup by originalId and populate the 'flashcards' field
    const trashcanGroup = await TrashcanGroup.findOne({
      originalId: groupId,
    }).populate("flashcards");

    if (!trashcanGroup) {
      return res.status(404).json({ error: "Deleted group not found" });
    }

    // Extract the flashcards array from the populated TrashcanGroup
    const flashcards = trashcanGroup.flashcards;

    res.status(200).json(flashcards);
  } catch (error) {
    console.error("Error fetching flashcards from deleted group:", error);
    res
      .status(500)
      .json({
        error:
          "An error occurred while fetching flashcards from deleted group.",
      });
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
