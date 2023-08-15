import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { ListItemText } from "@mui/material";

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      PaperProps={{
        sx: { width: "15%", backgroundColor: "#f0f0f0" },
      }}
    >
      <List>
        <ListItemText primary="Group 1" />
        <ListItemText primary="Group 2" />
        <ListItemText primary="Group 3" />
      </List>
    </Drawer>
  );
};

export default Sidebar;
