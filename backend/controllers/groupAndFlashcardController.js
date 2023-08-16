const Group = require("../models/group");
const Flashcard = require("../models/flashcard");

exports.getAllGroups = async (req, res) => {
  try {
    const groups = await Group.find();
    res.json(groups);
  } catch (error) {
    console.error("Error fetching groups:", error);
    res.status(500).json({ error: "An error occurred while fetching groups." });
  }
};

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
