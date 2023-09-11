import React, { useState } from "react";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import AddCardIcon from "@mui/icons-material/AddCard";

const DashboardSpeedDial = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAction = (action) => {
    console.log("Selected action:", action);
    handleClose();
  };

  return (
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
        onClick={() => handleAction("Group")}
      />
      <SpeedDialAction
        key="Add Flashcard"
        icon={<AddCardIcon />}
        tooltipTitle="Add Flashcard"
        onClick={() => handleAction("Flashcard")}
      />
    </SpeedDial>
  );
};

export default DashboardSpeedDial;
