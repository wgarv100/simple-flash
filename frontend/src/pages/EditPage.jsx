import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// MUI
import { Button, Box, useTheme } from "@mui/material";

// Components
import FlashcardList from "../components/FlashcardList";
import Sidebar from "../components/Sidebar";
import DashboardSpeedDial from "../components/DashboardSpeedDial";
import UpdateGroupNameModal from "../components/UpdateGroupNameModal";

// Services
import { deleteGroup } from "../services/groupServices";

// Handlers
import { handleFlashcardDeletion } from "../handlers/flashcardDeletionHandlers";
import { handleDeleteGroup } from "../handlers/groupHandlers";

// Hooks
import { useFlashcards } from "../hooks/useFlashcards";
import { useGroups } from "../hooks/useGroups";

const DashboardPage = () => {
  const { groupId } = useParams();
  const theme = useTheme();

  const [confirmDelete, setConfirmDelete] = useState(false);
  const [openUpdateGroupNameModal, setOpenUpdateGroupNameModal] =
    useState(false);

  const flashcards = useFlashcards(groupId);
  const groups = useGroups();

  const navigate = useNavigate();

  const onDeleteGroup = () =>
    handleDeleteGroup(
      confirmDelete,
      deleteGroup,
      groupId,
      groups,
      navigate,
      setConfirmDelete
    );

  // Update Group Name
  const toggleUpdateGroupNameModal = () => {
    setOpenUpdateGroupNameModal(false);
  };

  const handleGroupNameUpdatedSuccessfully = () => {
    setOpenUpdateGroupNameModal(false);
  };

  const handleReviewClick = () => {
    navigate(`/review/${groupId}`);
  };

  return (
    <div>
      <Box sx={{ ...theme.mixins.toolbar }} />
      <Box display="flex">
        <Box width={1 / 5}>
          <Sidebar groups={groups} />
        </Box>
        <Box width={4 / 5}>
          <Box
            display="flex"
            justifyContent="flex-end"
            marginTop={1}
            marginBottom={2}
          >
            <Button
              variant="contained"
              color="success"
              onClick={handleReviewClick}
              style={{ marginRight: "10px" }}
            >
              Review
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => setOpenUpdateGroupNameModal(true)}
              style={{ marginRight: "10px" }}
            >
              Update Group Name
            </Button>
            <Button variant="outlined" color="error" onClick={onDeleteGroup}>
              {confirmDelete ? "Confirm Delete" : "Delete Group"}
            </Button>
          </Box>
          <FlashcardList
            flashcards={flashcards}
            groupId={groupId}
            onDeleteFlashcard={handleFlashcardDeletion}
          />
        </Box>
      </Box>
      <DashboardSpeedDial groupId={groupId} />
      <UpdateGroupNameModal
        groupId={groupId}
        open={openUpdateGroupNameModal}
        onClose={toggleUpdateGroupNameModal}
        handleGroupNameUpdatedSuccessfully={handleGroupNameUpdatedSuccessfully}
      />
    </div>
  );
};

export default DashboardPage;
