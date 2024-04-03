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
