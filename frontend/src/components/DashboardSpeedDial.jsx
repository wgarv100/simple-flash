import React, { useState } from "react";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import AddCardIcon from "@mui/icons-material/AddCard";

import AddFlashcardModal from "./AddFlashcardModal";
import AddGroupModal from "./AddGroupModal";

const DashboardSpeedDial = ({ groupId }) => {
  const [openSpeedDial, setOpenSpeedDial] = useState(false);
  const [openAddFlashcardModal, setOpenAddFlashcardModal] = useState(false);
  const [openAddGroupModal, setOpenAddGroupModal] = useState(false);

  const handleOpen = () => {
    setOpenSpeedDial(true);
  };

  const handleClose = () => {
    setOpenSpeedDial(false);
  };

  // Add Flashcard
  const handleAddFlashcardModal = () => {
    setOpenAddFlashcardModal(false);
  };

  const handleFlashcardAdded = () => {
    setOpenAddFlashcardModal(false);
  };

  // Add Group
  const toggleAddGroupModal = () => {
    setOpenAddGroupModal(false);
  };

  const handleGroupAddedSuccessfully = () => {
    setOpenAddGroupModal(false);
  };

  return (
    <>
      <SpeedDial
        ariaLabel="SpeedDial"
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={openSpeedDial}
        style={{
          position: "fixed",
          bottom: 16,
          right: 16,
        }}
      >
        <SpeedDialAction
          key="Add Group"
          icon={<GroupWorkIcon />}
          tooltipTitle="Add Group"
          onClick={() => setOpenAddGroupModal(true)}
        />
        <SpeedDialAction
          key="Add Flashcard"
          icon={<AddCardIcon />}
          tooltipTitle="Add Flashcard"
          onClick={() => setOpenAddFlashcardModal(true)}
        />
      </SpeedDial>
      <AddFlashcardModal
        groupId={groupId}
        open={openAddFlashcardModal}
        onClose={handleAddFlashcardModal}
        onFlashcardAdded={handleFlashcardAdded}
      />
      <AddGroupModal
        groupId={groupId}
        open={openAddGroupModal}
        onClose={toggleAddGroupModal}
        handleGroupAddedSuccessfully={handleGroupAddedSuccessfully}
      />
    </>
  );
};

export default DashboardSpeedDial;
