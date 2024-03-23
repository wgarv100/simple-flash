import React, { useState } from "react";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import AddCardIcon from "@mui/icons-material/AddCard";

import AddFlashcardModal from "./AddFlashcardModal";

const DashboardSpeedDial = ({ groupId }) => {
  const [openSpeedDial, setOpenSpeedDial] = useState(false);
  const [openAddFlashcardModal, setOpenAddFlashcardModal] = useState(false);

  const handleOpen = () => {
    setOpenSpeedDial(true);
  };

  const handleClose = () => {
    setOpenSpeedDial(false);
  };

  const handleAddFlashcardModal = () => {
    setOpenAddFlashcardModal(false);
  };

  const handleFlashcardAdded = () => {
    setOpenAddFlashcardModal(false);
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
          onClick={() => console.log("add group")}
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
    </>
  );
};

export default DashboardSpeedDial;
