import React, { useState } from "react";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import AddCardIcon from "@mui/icons-material/AddCard";

import AddFlashcardModal from "./AddFlashcardModal";

const DashboardSpeedDial = ({ groupId }) => {
  const [open, setOpen] = useState(false); //change name to openSpeedDial
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <SpeedDial
        ariaLabel="SpeedDial"
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
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
          onClick={() => setOpenModal(true)}
        />
      </SpeedDial>
      <AddFlashcardModal
        groupId={groupId}
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
};

export default DashboardSpeedDial;
