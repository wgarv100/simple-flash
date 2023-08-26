import { useState } from "react";
import { addFlashcard } from "../services/flashcardServices";

export const useFlashcardAddition = (groupId) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFlashcardAdded = async (title, body) => {
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

  return {
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    handleFlashcardAdded,
  };
};
