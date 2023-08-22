import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { getAllGroups } from "../services/flashcardServices";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [groups, setGroups] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllGroups()
      .then((data) => setGroups(data))
      .catch((error) => console.error("Error fetching groups:", error));
  }, []);

  const handleGroupSelect = (group) => {
    navigate(`/groups/${group._id}`);
  };

  return (
    <div>
      <Sidebar groups={groups} onGroupSelect={handleGroupSelect} />
    </div>
  );
};

export default HomePage;
