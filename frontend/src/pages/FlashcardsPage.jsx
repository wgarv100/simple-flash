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

const FlashcardsPage = () => {
  const { groupId } = useParams();
  const [groups, setGroups] = useState([]);

  const { handleDeleteGroup } = useGroupDeletion();
  const { groupName, flashcards } = useFlashcards(groupId);

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
    </div>
  );
};

export default FlashcardsPage;
