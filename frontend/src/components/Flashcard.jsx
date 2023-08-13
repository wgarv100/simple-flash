import React, { useState } from "react";
import {
  deleteFlashcard,
  updateFlashcard,
} from "../services/flashcardServices";

const Flashcard = ({ flashcard, onDelete, onUpdate }) => {
  const [updatedFlashcard, setUpdatedFlashcard] = useState({
    title: flashcard.title,
    body: flashcard.body,
  });

  const handleDelete = async () => {
    try {
      const success = await deleteFlashcard(flashcard._id);
      if (success) {
        onDelete(flashcard._id);
      }
    } catch (error) {
      console.error("Error deleting flashcard:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedFlashcard((prevFlashcard) => ({
      ...prevFlashcard,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
      const updatedFlashcardData = await updateFlashcard(
        flashcard._id,
        updatedFlashcard
      );

      if (updatedFlashcardData) {
        onUpdate(updatedFlashcardData); // Update UI with updated flashcard data
      }
    } catch (error) {
      console.error("Error updating flashcard:", error);
    }
  };

  return (
    <div className="flashcard">
      <h2>{flashcard.title}</h2>
      <p>{flashcard.body}</p>
      <button onClick={handleDelete}>Delete</button>
      <input
        type="text"
        name="title"
        value={updatedFlashcard.title}
        onChange={handleInputChange}
      />
      <textarea
        name="body"
        value={updatedFlashcard.body}
        onChange={handleInputChange}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default Flashcard;
