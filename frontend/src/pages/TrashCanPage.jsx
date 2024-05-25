import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Grid, Button, Box } from "@mui/material";
import TrashCanSidebar from "../components/TrashCanSidebar";

import { useGroups } from "../hooks/useGroups";
import { useDeletedGroups } from "../hooks/useTrash";
import { useDeletedGroupFlashcards } from "../hooks/useDeletedGroupFlashcards";
import DeletedGroupFlashcardList from "../components/DeletedGroupFlashcardList";

import { handleRestoreGroup } from "../handlers/groupHandlers";

const TrashCanPage = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();

  const group = useGroups();
  const deletedGroups = useDeletedGroups();
  const deletedGroupFlashcards = useDeletedGroupFlashcards(groupId);

  const restoreGroup = () => {
    handleRestoreGroup(groupId, navigate, group);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <TrashCanSidebar deletedGroups={deletedGroups} />
        </Grid>
        <Grid item xs={10}>
          <Box
            display="flex"
            justifyContent="flex-end"
            marginTop={1}
            marginBottom={2}
          >
            <Button variant="contained" color="primary" onClick={restoreGroup}>
              Restore Group
            </Button>
          </Box>
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
