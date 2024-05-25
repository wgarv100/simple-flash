import React from "react";
import { Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const Sidebar = ({ groups }) => {
  const { groupId } = useParams();
  const drawerWidth = 240;
  const theme = useTheme();

  return (
    <>
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
    </>
  );
};

export default Sidebar;
