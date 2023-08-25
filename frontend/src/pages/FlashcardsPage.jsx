import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { getAllGroups } from "../services/groupServices";
import FlashcardList from "../components/FlashcardList";
import Sidebar from "../components/Sidebar";
import { Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useGroupDeletion } from "../hooks/useGroupDeletion";
import { useFlashcards } from "../hooks/useFlashcards";
import AddFlashcardForm from "../components/AddFlashcardForm";
import {
  getFlashcardsByGroup,
  addFlashcard,
} from "../services/flashcardServices";

const FlashcardsPage = () => {
  const { groupId } = useParams();
  const [groups, setGroups] = useState([]);
  const [setFlashcards] = useState([]);

  const { handleDeleteGroup } = useGroupDeletion();
  const { groupName, flashcards } = useFlashcards(groupId);

  useEffect(() => {
    getAllGroups()
      .then((data) => setGroups(data))
      .catch((error) => console.error("Error fetching groups:", error));
  }, []);

  const handleFlashcardAdded = async (title, body) => {
    try {
      const success = await addFlashcard(groupId, title, body);
      if (success) {
        // Fetch updated flashcards and update the list
        const updatedFlashcards = await getFlashcardsByGroup(groupId);
        setFlashcards(updatedFlashcards);
      }
    } catch (error) {
      console.error("Error adding flashcard:", error);
    }
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h4" textAlign="center" style={{ flex: 1 }}>
          {groupName}
        </Typography>
        <IconButton
          aria-label="Delete"
          color="secondary"
          onClick={() => handleDeleteGroup(groupId)}
        >
          <DeleteIcon />
        </IconButton>
      </div>

      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Sidebar groups={groups} />
        </Grid>
        <Grid item xs={10}>
          <FlashcardList flashcards={flashcards} groupId={groupId} />
        </Grid>
      </Grid>
      <AddFlashcardForm
        groupId={groupId}
        onFlashcardAdded={handleFlashcardAdded}
      />
    </div>
  );
};

export default FlashcardsPage;
