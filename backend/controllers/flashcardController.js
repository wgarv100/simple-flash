const Flashcard = require("../models/Flashcard");

// exports.getFlashcards = async (req, res) => {
//   try {
//     const flashcards = await Flashcards.find();
//     res.json(flashcards);
//   } catch (error) {
//     res.status(500).json({ error: "Error getting flashcards", error });
//   }
// };

exports.postFlashcards = async (req, res) => {
  try {
    const { title, body } = req.body;
    const newFlashcard = new Flashcard({ title, body });
    // console.log(newFlashcard);
    await newFlashcard.save();
    res.json(newFlashcard);
  } catch (error) {
    res.status(500).json({ error: "Error saving flashcards", error });
  }
};
