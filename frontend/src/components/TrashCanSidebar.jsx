import React from "react";
import {
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import { Link } from "react-router-dom";

const TrashCanSidebar = ({ deletedGroups, groupId }) => {
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
