import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import AddGroupForm from "../components/AddGroupForm";
import { addGroup, getAllGroups } from "../services/groupServices";

const HomePage = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    getAllGroups()
      .then((data) => setGroups(data))
      .catch((error) => console.error("Error fetching groups:", error));
  }, []);

  const handleAddGroup = async (groupName) => {
    try {
      const success = await addGroup(groupName);

      if (success) {
        const updatedGroups = await getAllGroups(); // Fetch the updated list of groups
        setGroups(updatedGroups);
      }
    } catch (error) {
      console.error("Error handling add group:", error);
    }
  };

  return (
    <div>
      <h1>Home</h1>
      <Sidebar groups={groups} />
      <AddGroupForm onSubmit={handleAddGroup} />
    </div>
  );
};

export default HomePage;
