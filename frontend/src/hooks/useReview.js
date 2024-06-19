import { useState, useEffect } from "react";
import { getFlashcardsByGroup } from "../services/flashcardServices";

export const useReviewFlashcards = (groupId) => {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    getFlashcardsByGroup(groupId)
      .then((data) => setFlashcards(data))
      .catch((error) =>
        console.error("Error fetching flashcards for review:", error)
      );
  }, [groupId]);

  return flashcards;
};
