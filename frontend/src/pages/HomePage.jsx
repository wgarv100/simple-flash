import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar"; // Import the Sidebar component
import { getAllGroups } from "../services/flashcardServices";

const HomePage = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    // Fetch all groups
    getAllGroups()
      .then((data) => setGroups(data))
      .catch((error) => console.error("Error fetching groups:", error));
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar groups={groups} />
    </div>
  );
};

export default HomePage;
