import React from "react";
import { Drawer, Typography } from "@mui/material";

const TrashCanSidebar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      PaperProps={{
        sx: { width: "250px", backgroundColor: "#f0f0f0" },
      }}
    >
      <Typography variant="h6" align="center" sx={{ mt: 2 }}>
        Deleted Groups
      </Typography>
    </Drawer>
  );
};

export default TrashCanSidebar;
