import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { updateGroupName } from "../services/groupServices";
import { validateUpdateGroupNameForm } from "../validation/groupFormValidation";

const UpdateGroupNameForm = ({
  groupId,
  handleGroupNameUpdatedSuccessfully,
}) => {
  const [newGroupName, setNewGroupName] = useState("");
  const [error, setError] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const validationError = validateUpdateGroupNameForm(newGroupName);

    if (validationError) {
      setError(validationError);
      return false;
    }

    try {
      const success = await updateGroupName(groupId, newGroupName);
      if (success) {
        handleGroupNameUpdatedSuccessfully();
        setError("");
        setNewGroupName("");
      }
      return success;
    } catch (error) {
      console.error("Error updating group name:", error);
      setError("An error occurred while updating the group name.");
      return false;
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="group-form"
      style={{
        width: 500,
        margin: "0 auto",
        backgroundColor: "white",
        padding: "25px",
        borderRadius: "5px",
      }}
    >
      <TextField
        label="New Group Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={newGroupName}
        onChange={(e) => setNewGroupName(e.target.value)}
        error={!!error}
        helperText={error}
      />
      <Button type="submit" variant="contained" color="primary">
        Update Group Name
      </Button>
    </form>
  );
};

export default UpdateGroupNameForm;
