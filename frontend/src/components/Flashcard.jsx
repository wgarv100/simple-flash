import React from "react";

const Flashcard = ({ flashcard, onDelete }) => {
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

  return (
    <div className="flashcard">
      <h2>{flashcard.title}</h2>
      <p>{flashcard.body}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Flashcard;
