import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// MUI
import Grid from "@mui/material/Grid";
import { Typography, Button } from "@mui/material";

// Components
import FlashcardList from "../components/FlashcardList";
import Sidebar from "../components/Sidebar";
import AddFlashcardModal from "../components/AddFlashcardModal";

// Services
import { getAllGroups } from "../services/groupServices";

// Hooks
import { useGroupDeletion } from "../hooks/useGroupDeletion";
import { useGetFlashcards } from "../hooks/useGetFlashcards";
import { useFlashcardDeletion } from "../hooks/useFlashcardDeletion";
import { useFlashcardAddition } from "../hooks/useFlashcardAddition";

// Handlers
import { handleOpenModal, handleCloseModal } from "../handlers/modalHandlers";

const FlashcardsPage = () => {
  const { groupId } = useParams();
  const [groups, setGroups] = useState([]);
  // const [flashcardsState, setFlashcardsState] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { handleDeleteGroup } = useGroupDeletion();
  const { handleDeleteFlashcard } = useFlashcardDeletion();
  const { handleFlashcardAdded } = useFlashcardAddition();
  const { groupName, flashcards } = useGetFlashcards();

  useEffect(() => {
    getAllGroups()
      .then((data) => setGroups(data))
      .catch((error) => console.error("Error fetching groups:", error));
  }, []);

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h4" textAlign="center" style={{ flex: 1 }}>
          {groupName}
        </Typography>
        <Button
          variant="outlined"
          color="error"
          onClick={() => handleDeleteGroup(groupId)}
        >
          Delete Group
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => handleOpenModal(setIsModalOpen)}
        >
          Add Flashcard
        </Button>
      </div>

      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Sidebar groups={groups} />
        </Grid>
        <Grid item xs={10}>
          <FlashcardList
            flashcards={flashcards}
            groupId={groupId}
            onDeleteFlashcard={handleDeleteFlashcard}
          />
        </Grid>
      </Grid>
      <AddFlashcardModal
        isOpen={isModalOpen}
        onClose={() => handleCloseModal(setIsModalOpen)}
        onFlashcardAdded={handleFlashcardAdded}
        groupId={groupId}
      />
    </div>
  );
};

export default FlashcardsPage;
