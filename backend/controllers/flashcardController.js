const Flashcard = require("../models/Flashcard");

exports.getFlashcards = async (req, res) => {
  try {
    const flashcards = await Flashcard.find();
    res.json(flashcards);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error getting flashcards", message: error.message });
  }
};

exports.postFlashcards = async (req, res) => {
  try {
    const { title, body } = req.body;
    const newFlashcard = new Flashcard({ title, body });
    await newFlashcard.save();
    res.json(newFlashcard);
  } catch (error) {
    res.status(500).json({ error: "Error saving flashcards", error });
  }
};

exports.deleteFlashcard = async (req, res) => {
  try {
    const flashcard = await Flashcard.findByIdAndDelete(req.params.id);

    if (!flashcard) {
      return res.status(404).json({ message: "Flashcard not found" });
    }

    res.json({ message: "Flashcard deleted successfully" });
  } catch (error) {
    console.error("Error deleting flashcard:", error);
    res
      .status(500)
      .json({ message: "An error occurred", message: error.message });
  }
};

exports.updateFlashcard = async (req, res) => {
  try {
    const updatedFlashcard = await Flashcard.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedFlashcard) {
      return res.status(404).json({ message: "Flashcard not found" });
    }

    res.json(updatedFlashcard);
  } catch (error) {
    console.error("Error updating flashcard:", error);
    res.status(500).json({ message: "An error occurred" });
  }
};
