import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Sidebar from "../components/Sidebar"; // Import the Sidebar component
import FlashcardList from "../components/FlashcardList";
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
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Sidebar groups={groups} />
      </Grid>
      <Grid item xs={9}>
        <FlashcardList />
      </Grid>
    </Grid>
  );
};

export default HomePage;
