import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { addFlashcard } from "../services/flashcardServices"; // Import the addFlashcard function

const AddFlashcardForm = ({ groupId, onFlashcardAdded, onClose }) => {
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
        onClose(true);
      }
    } catch (error) {
      console.error("Error adding flashcard:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "100%",
        margin: "0 auto",
        backgroundColor: "white",
        padding: "25px",
        borderRadius: "5px",
      }}
    >
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
      <Box style={{ paddingTop: "20px" }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginRight: "5px" }}
        >
          Add Flashcard
        </Button>
        <Button variant="contained" color="error" onClick={onClose}>
          Close
        </Button>
      </Box>
    </form>
  );
};

export default AddFlashcardForm;
