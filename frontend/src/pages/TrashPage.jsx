import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTheme, Button, Box } from "@mui/material";
import TrashSidebar from "../components/TrashSidebar";

import { useGroups } from "../hooks/useGroups";
import { useDeletedGroups } from "../hooks/useTrash";
import { useDeletedGroupFlashcards } from "../hooks/useDeletedGroupFlashcards";
import DeletedGroupFlashcardList from "../components/DeletedGroupFlashcardList";

import { handleRestoreGroup } from "../handlers/groupHandlers";

const TrashCanPage = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();

  const group = useGroups();
  const deletedGroups = useDeletedGroups();
  const deletedGroupFlashcards = useDeletedGroupFlashcards(groupId);

  const restoreGroup = () => {
    handleRestoreGroup(groupId, navigate, group);
  };

  return (
    <div>
      <Box sx={{ ...theme.mixins.toolbar }} />
      <Box display="flex">
        <Box width={1 / 5}>
          <TrashSidebar deletedGroups={deletedGroups} />
        </Box>
        <Box width={4 / 5}>
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
        </Box>
      </Box>
    </div>
  );
};

export default TrashCanPage;
