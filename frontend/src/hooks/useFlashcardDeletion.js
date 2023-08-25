import { useState } from "react";
import { deleteFlashcard } from "../services/flashcardServices";

export const useFlashcardDeletion = () => {
  const handleDeleteFlashcard = async (groupId, flashcardId) => {
    try {
      const success = await deleteFlashcard(groupId, flashcardId);
    } catch (error) {
      console.error("Error deleting flashcard:", error);
    }
  };

  return {
    handleDeleteFlashcard,
  };
};
