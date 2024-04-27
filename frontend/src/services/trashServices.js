// Read
export const getDeletedGroups = async () => {
  try {
    const response = await fetch("/api/trash");

    if (!response.ok) {
      throw new Error("Failed to fetch deleted groups.");
    }

    const groups = await response.json();
    return groups;
  } catch (error) {
    console.error("Error fetching deleted groups:", error);
    throw error;
  }
};

// Read
export const getDeletedGroupFlashcards = async (groupId) => {
  try {
    const response = await fetch(`/api/trash/${groupId}`);

    if (!response.ok) {
      throw new Error("Failed to fetch flashcards of the deleted group.");
    }

    const flashcards = await response.json();
    return flashcards;
  } catch (error) {
    console.error("Error fetching flashcards of the deleted group:", error);
    throw error;
  }
};
