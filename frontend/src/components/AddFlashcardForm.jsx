import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { addFlashcard } from "../services/flashcardServices"; // Import the addFlashcard function

const AddFlashcardForm = ({ groupId, onFlashcardAdded }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const success = await addFlashcard(groupId, title, body);
      if (success) {
        onFlashcardAdded(); // Trigger a callback to update the flashcard list
        setTitle(""); // Clear input fields
        setBody("");
      }
    } catch (error) {
      console.error("Error adding flashcard:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: 300, margin: "0 auto" }}>
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="Body"
        variant="outlined"
        fullWidth
        margin="normal"
        multiline
        rows={4}
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Add Flashcard
      </Button>
    </form>
  );
};

export default AddFlashcardForm;
