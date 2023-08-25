// Create
export const addFlashcard = async (groupId, title, body) => {
  try {
    const response = await fetch(`/api/groups/${groupId}/flashcards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    });

    if (!response.ok) {
      throw new Error("Failed to add flashcard.");
    }

    return true;
  } catch (error) {
    console.error("Error adding flashcard:", error);
    return false;
  }
};

// Read
export const getFlashcardsByGroup = async (groupId) => {
  try {
    const response = await fetch(`/api/groups/${groupId}/flashcards`);

    if (!response.ok) {
      throw new Error("Failed to fetch flashcards.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching flashcards:", error);
    return [];
  }
};

// Delete
export const deleteFlashcard = async (groupId, flashcardId) => {
  try {
    const response = await fetch(
      `/api/groups/${groupId}/flashcards/${flashcardId}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete flashcard.");
    }

    return true;
  } catch (error) {
    console.error("Error deleting flashcard:", error);
    return false;
  }
};
