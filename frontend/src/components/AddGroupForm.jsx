import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { addGroup } from "../services/groupServices";
import { validateAddGroupForm } from "../validation/formValidation";

const GroupForm = ({ handleGroupAddedSuccessfully }) => {
  const [groupName, setGroupName] = useState("");
  const [error, setError] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const validationError = validateAddGroupForm(groupName);

    if (validationError) {
      setError(validationError);
      return false;
    }

    try {
      const success = await addGroup(groupName);
      handleGroupAddedSuccessfully();
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
      style={{
        width: 500,
        margin: "0 auto",
        backgroundColor: "white",
        padding: "25px",
        borderRadius: "5px",
      }}
      backgroundColor="white"
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
