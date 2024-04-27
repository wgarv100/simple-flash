import React from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import TrashCanSidebar from "../components/TrashCanSidebar";

import { useDeletedGroups } from "../hooks/useTrash";
import { useDeletedGroupFlashcards } from "../hooks/useDeletedGroupFlashcards";
import DeletedGroupFlashcardList from "../components/DeletedGroupFlashcardList";

const TrashCanPage = () => {
  const { groupId } = useParams();

  const deletedGroups = useDeletedGroups();
  const deletedGroupFlashcards = useDeletedGroupFlashcards(groupId);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <TrashCanSidebar deletedGroups={deletedGroups} />
        </Grid>
        <Grid item xs={10}>
          <DeletedGroupFlashcardList
            deletedGroupFlashcards={deletedGroupFlashcards}
            groupId={groupId}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default TrashCanPage;
