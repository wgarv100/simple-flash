import React, { useState, useEffect } from "react";
import Flashcard from "./Flashcard"; // Create a Flashcard component for displaying flashcards

const FlashcardList = ({ flashcard, onDelete }) => {
  const [flashcards, setFlashcards] = useState([]);
  const [allFlashcards, setAllFlashcards] = useState(flashcards);

  useEffect(() => {
    // Fetch all flashcards from the backend when the component mounts
    fetch("/api/flashcards")
      .then((response) => response.json())
      .then((data) => setFlashcards(data))
      .catch((error) => console.error("Error fetching flashcards:", error));
  }, []);

  const handleFlashcardUpdate = (updatedFlashcard) => {
    // Find the index of the updated flashcard in the array
    const updatedIndex = allFlashcards.findIndex(
      (flashcard) => flashcard._id === updatedFlashcard._id
    );

    if (updatedIndex !== -1) {
      // Create a new array with the updated flashcard at the specified index
      const updatedFlashcards = [
        ...allFlashcards.slice(0, updatedIndex),
        updatedFlashcard,
        ...allFlashcards.slice(updatedIndex + 1),
      ];

      // Update the state with the new array of flashcards
      setAllFlashcards(updatedFlashcards);
    }
  };

  return (
    <div>
      {flashcards.map((flashcard) => (
        <Flashcard
          key={flashcard._id}
          flashcard={flashcard}
          onDelete={onDelete}
          onUpdate={handleFlashcardUpdate}
        />
      ))}
    </div>
  );
};

export default FlashcardList;
