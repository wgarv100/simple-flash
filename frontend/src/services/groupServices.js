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

// Update
export const updateGroupName = async (groupId, newGroupName) => {
  try {
    const response = await fetch(`/api/groups/${groupId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: newGroupName }),
    });

    if (response.ok) {
      return true; // Group name updated successfully
    } else {
      throw new Error("Failed to update group name");
    }
  } catch (error) {
    console.error("Error updating group name:", error);
    return false;
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
