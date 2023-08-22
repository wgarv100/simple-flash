import React from "react";

const FlashcardList = ({ flashcards }) => {
  return (
    <div className="flashcard-list">
      <ul>
        {flashcards.map((flashcard) => (
          <li key={flashcard._id}>
            <h3>{flashcard.title}</h3>
            <p>{flashcard.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlashcardList;
