import { useState, useEffect } from "react";
import { getDeletedGroupFlashcards } from "../services/trashServices";

export const useDeletedGroupFlashcards = (groupId) => {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    if (groupId) {
      getDeletedGroupFlashcards(groupId)
        .then((data) => setFlashcards(data))
        .catch((error) => console.error("Error fetching flashcards:", error));
    }
  }, [groupId]);

  return flashcards;
};
