import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = ({ groups }) => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      PaperProps={{
        sx: { width: "15%", backgroundColor: "#f0f0f0" },
      }}
    >
      <List>
        {groups.map((group) => (
          <ListItem
            key={group._id}
            button
            component={Link}
            to={`/groups/${group._id}`}
          >
            <ListItemText primary={group.name} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
