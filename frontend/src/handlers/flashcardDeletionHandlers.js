import { deleteFlashcard } from "../services/flashcardServices";

export const handleFlashcardDeletion = async (groupId, flashcardId) => {
  try {
    const success = await deleteFlashcard(groupId, flashcardId);
    return success;
  } catch (error) {
    console.error("Error deleting flashcard:", error);
    return false;
  }
};
