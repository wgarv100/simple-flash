// GET all groups

export const getAllGroups = async () => {
  try {
    const response = await fetch("/api/groups");

    if (!response.ok) {
      throw new Error("Failed to fetch groups.");
    }

    const groups = await response.json();
    return groups;
  } catch (error) {
    console.error("Error fetching groups:", error);
    throw error;
  }
};

// Create
export const addFlashcard = async (title, body) => {
  try {
    const response = await fetch("/api/flashcards", {
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

//Read
export const fetchFlashcards = async () => {
  try {
    const response = await fetch("/api/flashcards");
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

// Update
export const updateFlashcard = async (flashcardId, updatedFlashcard) => {
  try {
    const response = await fetch(`/api/flashcards/${flashcardId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFlashcard),
    });

    if (!response.ok) {
      throw new Error("Failed to update flashcard.");
    }

    const updatedFlashcardData = await response.json();
    return updatedFlashcardData;
  } catch (error) {
    console.error("Error updating flashcard:", error);
    return null;
  }
};

// Delete
export const deleteFlashcard = async (flashcardId) => {
  try {
    const response = await fetch(`/api/flashcards/${flashcardId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete flashcard.");
    }

    return true;
  } catch (error) {
    console.error("Error deleting flashcard:", error);
    return false;
  }
};
