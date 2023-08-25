const Flashcard = require("../models/flashcard");
const Group = require("../models/group");

// Create
exports.createFlashcard = async (req, res) => {
  try {
    const { title, body } = req.body;
    const groupId = req.params.groupId;

    const group = await Group.findById(groupId);
    if (!group) {
      return res.status(404).json({ error: "Group not found" });
    }

    const flashcard = new Flashcard({ title, body });
    await flashcard.save();

    group.flashcards.push(flashcard._id);
    await group.save();

    res.status(201).json(flashcard);
  } catch (error) {
    console.error("Error creating flashcard:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the flashcard." });
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
exports.deleteFlashcardByGroup = async (req, res) => {
  try {
    const { groupId, flashcardId } = req.params;

    const group = await Group.findById(groupId);
    if (!group) {
      return res.status(404).json({ message: "Group not found." });
    }

    const flashcardIndex = group.flashcards.findIndex(
      (flashcard) => flashcard._id == flashcardId
    );
    if (flashcardIndex === -1) {
      return res
        .status(404)
        .json({ message: "Flashcard not found in the group." });
    }

    group.flashcards.splice(flashcardIndex, 1);
    await group.save();

    res.json({ message: "Flashcard deleted successfully." });
  } catch (error) {
    console.error("Error deleting flashcard:", error);
    res
      .status(500)
      .json({ message: "An error occurred while deleting the flashcard." });
  }
};
