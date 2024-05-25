import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { getAllGroups } from "../services/groupServices";
import { Typography } from "@mui/material";

const HomePage = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    getAllGroups()
      .then((data) => setGroups(data))
      .catch((error) => console.error("Error fetching groups:", error));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Sidebar groups={groups} />
      <Typography
        variant="h3"
        style={{ flexGrow: 1, textAlign: "center", color: "black" }}
      >
        Select a group to get started
      </Typography>
    </div>
  );
};

export default HomePage;
