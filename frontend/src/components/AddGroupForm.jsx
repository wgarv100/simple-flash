import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { addGroup } from "../services/groupServices";
import { validateGroupName } from "./formValidation";

const GroupForm = ({ onSubmit }) => {
  const [groupName, setGroupName] = useState("");
  const [error, setError] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const validationError = validateGroupName(groupName);

    if (validationError) {
      setError(validationError);
      return false;
    }

    try {
      const success = await addGroup(groupName);
      setError("");
      setGroupName("");
      return success;
    } catch (error) {
      console.error("Error adding group:", error);
      setError("An error occurred while adding the group.");
      return false;
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
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
        error={!!error}
        helperText={error}
      />
      <Button type="submit" variant="contained" color="primary">
        Add Group
      </Button>
    </form>
  );
};

export default GroupForm;
