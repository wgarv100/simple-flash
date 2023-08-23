// components/GroupForm.js
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { addGroup } from "../services/groupServices"; // Import the addGroup function

const GroupForm = ({ onSubmit }) => {
  const [groupName, setGroupName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const success = await addGroup(groupName);

      if (success) {
        onSubmit(); // Call the parent's onSubmit function to update the list of groups
        setGroupName(""); // Clear the input field
      }
    } catch (error) {
      console.error("Error adding group:", error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="group-form"
      style={{ width: 500, margin: "0 auto" }}
    >
      <TextField
        label="Group Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Add Group
      </Button>
    </form>
  );
};

export default GroupForm;
