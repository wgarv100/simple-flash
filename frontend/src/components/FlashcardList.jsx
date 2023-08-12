import React, { useState, useEffect } from "react";
import Flashcard from "./Flashcard"; // Create a Flashcard component for displaying flashcards

const FlashcardList = () => {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    // Fetch all flashcards from the backend when the component mounts
    fetch("/api/flashcards")
      .then((response) => response.json())
      .then((data) => setFlashcards(data))
      .catch((error) => console.error("Error fetching flashcards:", error));
  }, []);

  return (
    <div>
      {flashcards.map((flashcard) => (
        <Flashcard key={flashcard._id} flashcard={flashcard} />
      ))}
    </div>
  );
};

export default FlashcardList;
