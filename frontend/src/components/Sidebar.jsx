import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link, useParams } from "react-router-dom";

const Sidebar = ({ groups }) => {
  const { groupId } = useParams();

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      PaperProps={{
        sx: { width: "250px", backgroundColor: "#f0f0f0" },
      }}
    >
      <List>
        {groups.map((group) => (
          <ListItem
            key={group._id}
            button
            component={Link}
            to={`/groups/${group._id}`}
            sx={{ bgcolor: group._id === groupId ? "lightgrey" : "inherit" }}
          >
            <ListItemText primary={group.name} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
