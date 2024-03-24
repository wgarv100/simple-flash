import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// MUI
import { Grid, Button, Box } from "@mui/material";

// Components
import FlashcardList from "../components/FlashcardList";
import Sidebar from "../components/Sidebar";
import DashboardSpeedDial from "../components/DashboardSpeedDial";

// Services
import { getAllGroups, deleteGroup } from "../services/groupServices";
import { getFlashcardsByGroup } from "../services/flashcardServices";

// Handlers
import { handleFlashcardDeletion } from "../handlers/flashcardDeletionHandlers";

const DashboardPage = () => {
  const { groupId } = useParams();

  const [flashcards, setFlashcards] = useState([]);
  const [groups, setGroups] = useState([]);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    getAllGroups()
      .then((data) => setGroups(data))
      .catch((error) => console.error("Error fetching groups:", error));
  }, [groups]);

  useEffect(() => {
    getFlashcardsByGroup(groupId)
      .then((data) => setFlashcards(data))
      .catch((error) => console.error("Error fetching flashcards:", error));
  }, [flashcards]);

  const handleDeleteGroup = () => {
    if (confirmDelete) {
      deleteGroup(groupId).then(() => {
        if (groups.length > 0) {
          navigate(`/groups/${groups[0]._id}`);
        }
      });
    } else {
      setConfirmDelete(true);
    }
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Sidebar groups={groups} />
        </Grid>
        <Grid item xs={10}>
          <Box
            display="flex"
            justifyContent="flex-end"
            marginTop={1}
            marginBottom={2}
          >
            <Button
              variant="outlined"
              color="error"
              onClick={handleDeleteGroup}
            >
              {confirmDelete ? "Confirm Delete" : "Delete Group"}
            </Button>
          </Box>
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

export default DashboardPage;
