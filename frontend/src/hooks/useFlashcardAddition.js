import { addFlashcard } from "../services/flashcardServices";

export const useFlashcardAddition = (groupId) => {
  const handleFlashcardAdded = async (title, body) => {
    try {
      const success = await addFlashcard(groupId, title, body);
      if (success) {
        return success;
      }
    } catch (error) {
      console.error("Error adding flashcard:", error);
    }
  };

  return {
    handleFlashcardAdded,
  };
};
