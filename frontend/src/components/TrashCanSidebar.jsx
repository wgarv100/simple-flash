import React from "react";
import {
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import { Link, useParams } from "react-router-dom";

const TrashCanSidebar = ({ deletedGroups }) => {
  const { groupId } = useParams();

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
            to={`/groups/${deletedGroup._id}`}
            sx={{
              bgcolor: deletedGroup._id === groupId ? "lightgrey" : "inherit",
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
