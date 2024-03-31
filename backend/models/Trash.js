const mongoose = require("mongoose");

const TrashcanGroupSchema = new mongoose.Schema({
  originalId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  flashcards: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Flashcard",
    },
  ],
  deletedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Trashcan", TrashcanGroupSchema);
