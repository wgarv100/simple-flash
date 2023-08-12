import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AddFlashcardForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (!title.trim() || !body.trim()) {
      setError("Both title and body are required.");
      return;
    }

    addFlashcardToBackend();
  };

  const addFlashcardToBackend = async () => {
    try {
      const response = await fetch("/api/flashcards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, body }),
      });

      if (!response.ok) {
        throw new Error("Failed to add flashcard.");
      }

      // Clear the form fields and error
      setTitle("");
      setBody("");
      setError("");
    } catch (error) {
      console.error("Error adding flashcard:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          variant="outlined"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setError("");
          }}
          error={error && !title.trim()}
          helperText={error && !title.trim() ? error : ""}
          style={{ marginBottom: "10px" }}
        />
        <TextField
          label="Body"
          variant="outlined"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
            setError("");
          }}
          error={error && !body.trim()}
          helperText={error && !body.trim() ? error : ""}
          style={{ marginBottom: "10px" }}
        />
        <Button variant="contained" color="primary" type="submit">
          Add Flashcard
        </Button>
      </form>
    </div>
  );
};

export default AddFlashcardForm;
