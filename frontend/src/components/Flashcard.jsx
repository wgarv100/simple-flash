import React, { useState } from "react";

const Flashcard = ({ flashcard, onDelete, onUpdate }) => {
  const [updatedFlashcard, setUpdatedFlashcard] = useState({
    title: flashcard.title,
    body: flashcard.body,
  });

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/flashcards/${flashcard._id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        onDelete(flashcard._id);
      } else {
        console.error("Failed to delete flashcard");
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
      const response = await fetch(`/api/flashcards/${flashcard._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFlashcard),
      });

      if (response.ok) {
        const updatedFlashcardData = await response.json();
        onUpdate(updatedFlashcardData); // Update UI with updated flashcard data
      } else {
        console.error("Failed to update flashcard");
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
