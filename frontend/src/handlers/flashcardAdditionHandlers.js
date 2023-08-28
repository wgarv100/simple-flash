import { addFlashcard } from "../services/flashcardServices";

export const handleFlashcardAdded = async (
  groupId,
  title,
  body,
  handleCloseModal
) => {
  try {
    const success = await addFlashcard(groupId, title, body);
    if (success) {
      handleCloseModal();
      return success;
    }
  } catch (error) {
    console.error("Error adding flashcard:", error);
  }
};
