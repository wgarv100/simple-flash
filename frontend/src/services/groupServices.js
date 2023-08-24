// Create
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

// Read
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

// Read selected group
export const fetchSelectedGroup = async (groupId) => {
  try {
    const response = await fetch(`/api/groups/${groupId}`);

    if (!response.ok) {
      throw new Error("Failed to fetch group.");
    }

    const group = await response.json();
    return group;
  } catch (error) {
    console.error("Error fetching group:", error);
    return null;
  }
};

// Delete
const deleteGroup = async (groupId) => {
  try {
    const response = await fetch(`/api/groups/${groupId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      return true; // Group deleted successfully
    } else {
      throw new Error("Failed to delete group");
    }
  } catch (error) {
    console.error("Error deleting group:", error);
    return false;
  }
};

export { deleteGroup };
