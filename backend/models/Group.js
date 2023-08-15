const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  flashcards: [{ type: mongoose.Schema.Types.ObjectId, ref: "Flashcard" }],
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
