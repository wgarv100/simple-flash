import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import {
  getAllGroups,
  getFlashcardsByGroup,
} from "../services/flashcardServices";
import FlashcardList from "../components/FlashcardList";
import Sidebar from "../components/Sidebar";

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
    // Fetch flashcards for the selected group
    getFlashcardsByGroup(groupId)
      .then((data) => setFlashcards(data))
      .catch((error) => console.error("Error fetching flashcards:", error));
  }, [groupId]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Sidebar groups={groups} />
      </Grid>
      <Grid item xs={10}>
        <FlashcardList flashcards={flashcards} groupId={groupId} />
      </Grid>
    </Grid>
  );
};

export default FlashcardsPage;
