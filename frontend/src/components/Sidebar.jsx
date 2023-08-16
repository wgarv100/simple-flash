import React from "react";
import { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { ListItemText } from "@mui/material";
import { getAllGroups } from "../services/flashcardServices";

const Sidebar = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetchGroups();
  }, []);

  const fetchGroups = async () => {
    try {
      const fetchedGroups = await getAllGroups();
      setGroups(fetchedGroups);
    } catch (error) {
      console.error("Error fetching groups:", error);
    }
  };
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
          <ListItemText key={group._id}>{group.name}</ListItemText>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
