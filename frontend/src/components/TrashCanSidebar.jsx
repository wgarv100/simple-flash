import React from "react";
import {
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";

import { Link } from "react-router-dom";

const TrashCanSidebar = ({ deletedGroups, groupId }) => {
  const drawerWidth = 240;
  const theme = useTheme();
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Box sx={{ ...theme.mixins.toolbar }} />
      <List>
        {deletedGroups.map((deletedGroup) => (
          <ListItem
            key={deletedGroup._id}
            button
            component={Link}
            to={`/trash/${deletedGroup.originalId}`}
            sx={{
              bgcolor:
                deletedGroup.originalId === groupId ? "lightgrey" : "inherit",
            }}
          >
            <ListItemText primary={deletedGroup.name} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default TrashCanSidebar;
