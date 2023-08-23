// services/groupServices.js
const addGroup = async (groupName) => {
  try {
    const response = await fetch("/api/groups", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: groupName }),
    });

    if (response.ok) {
      return true; // Group added successfully
    } else {
      throw new Error("Failed to add group");
    }
  } catch (error) {
    console.error("Error adding group:", error);
    return false;
  }
};

export { addGroup };
