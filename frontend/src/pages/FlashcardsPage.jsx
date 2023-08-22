import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFlashcardsByGroup } from "../services/flashcardServices";
import FlashcardList from "../components/FlashcardList";

const FlashcardsPage = () => {
  const { groupId } = useParams();
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    // Fetch flashcards for the selected group
    getFlashcardsByGroup(groupId)
      .then((data) => setFlashcards(data))
      .catch((error) => console.error("Error fetching flashcards:", error));
  }, [groupId]);

  return (
    <div>
      <h1>Flashcards in Group</h1>
      <FlashcardList flashcards={flashcards} />
    </div>
  );
};

export default FlashcardsPage;
