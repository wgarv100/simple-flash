import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { getFlashcardsByGroup } from "../services/flashcardServices";
import { getAllGroups } from "../services/groupServices";
import FlashcardList from "../components/FlashcardList";
import Sidebar from "../components/Sidebar";
import { Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete"; // Import the Delete icon
import { deleteGroup } from "../services/groupServices";

const FlashcardsPage = () => {
  const { groupId } = useParams();
  const [flashcards, setFlashcards] = useState([]);
  const [groups, setGroups] = useState([]);
  const [groupName, setGroupName] = useState(""); // Added state to hold the group name
  const navigate = useNavigate();

  useEffect(() => {
    getAllGroups()
      .then((data) => setGroups(data))
      .catch((error) => console.error("Error fetching groups:", error));
  }, []);

  useEffect(() => {
    // Find the selected group by matching groupId
    const selectedGroup = groups.find((group) => group._id === groupId);
    if (selectedGroup) {
      // Update the group name state
      setGroupName(selectedGroup.name);
    }

    // Fetch flashcards for the selected group
    getFlashcardsByGroup(groupId)
      .then((data) => setFlashcards(data))
      .catch((error) => console.error("Error fetching flashcards:", error));
  }, [groupId, groups]);

  const handleDeleteGroup = async () => {
    const success = await deleteGroup(groupId); // Call the deleteGroup function

    if (success) {
      // Refresh the list of groups after deletion
      getAllGroups()
        .then((data) => setGroups(data))
        .catch((error) => console.error("Error fetching groups:", error));

      // Redirect to the homepage or another appropriate page
      navigate("/");
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
          onClick={handleDeleteGroup}
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
