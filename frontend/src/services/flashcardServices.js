// GET flaschards of selected group
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

// Create a flashcard
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
