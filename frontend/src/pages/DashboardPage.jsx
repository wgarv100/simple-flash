import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// MUI
import { Grid } from "@mui/material";

// Components
import FlashcardList from "../components/FlashcardList";
import Sidebar from "../components/Sidebar";
import DashboardSpeedDial from "../components/DashboardSpeedDial";

// Services
import { getAllGroups } from "../services/groupServices";
import { getFlashcardsByGroup } from "../services/flashcardServices";

// Handlers
import { handleFlashcardDeletion } from "../handlers/flashcardDeletionHandlers";

const FlashcardsPage = () => {
  const { groupId } = useParams();

  const [flashcards, setFlashcards] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    getAllGroups()
      .then((data) => setGroups(data))
      .catch((error) => console.error("Error fetching groups:", error));
  }, []);

  useEffect(() => {
    getFlashcardsByGroup(groupId)
      .then((data) => setFlashcards(data))
      .catch((error) => console.error("Error fetching flashcards:", error));
  }, [flashcards]);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Sidebar groups={groups} />
        </Grid>
        <Grid item xs={10}>
          <FlashcardList
            flashcards={flashcards}
            groupId={groupId}
            onDeleteFlashcard={handleFlashcardDeletion}
          />
        </Grid>
      </Grid>
      <DashboardSpeedDial groupId={groupId} />
    </div>
  );
};

export default FlashcardsPage;
