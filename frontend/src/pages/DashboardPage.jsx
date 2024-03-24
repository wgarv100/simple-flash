import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// MUI
import { Typography, Button, Grid } from "@mui/material";

// Components
import FlashcardList from "../components/FlashcardList";
import Sidebar from "../components/Sidebar";
import AddFlashcardModal from "../components/AddFlashcardModal";

// Services
import { getAllGroups } from "../services/groupServices";

// Hooks
import { useGroupDeletion } from "../hooks/useGroupDeletion";
// import { useGetFlashcards } from "../hooks/useGetFlashcards";

// Handlers
import { handleOpenModal, handleCloseModal } from "../handlers/modalHandlers";
import { handleFlashcardAdded } from "../handlers/flashcardAdditionHandlers";
import { handleFlashcardDeletion } from "../handlers/flashcardDeletionHandlers";
import DashboardSpeedDial from "../components/DashboardSpeedDial";
import { getFlashcardsByGroup } from "../services/flashcardServices";

const FlashcardsPage = () => {
  const { groupId } = useParams();

  const [flashcards, setFlashcards] = useState([]);
  const [groups, setGroups] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { handleDeleteGroup } = useGroupDeletion();
  // const { groupName } = useGetFlashcards();

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
