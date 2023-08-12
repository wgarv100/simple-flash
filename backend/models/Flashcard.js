const mongoose = require("mongoose");

const flashcardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Flashcard = mongoose.model("Flashcard", flashcardSchema);

module.exports = Flashcard;
