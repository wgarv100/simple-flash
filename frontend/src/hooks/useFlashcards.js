import { useState, useEffect } from "react";
import { getFlashcardsByGroup } from "../services/flashcardServices";

export const useFlashcards = (groupId) => {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    getFlashcardsByGroup(groupId)
      .then((data) => setFlashcards(data))
      .catch((error) => console.error("Error fetching flashcards:", error));
  }, [flashcards]);

  return flashcards;
};
