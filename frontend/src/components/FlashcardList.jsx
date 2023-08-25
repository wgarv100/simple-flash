import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const FlashcardList = ({ flashcards, groupId, onDeleteFlashcard }) => {
  return (
    <div className="flashcard-list">
      {flashcards.map((flashcard) => (
        <Card
          key={flashcard._id}
          variant="outlined"
          style={{ marginBottom: "10px" }}
        >
          <CardContent>
            <Typography variant="h6" component="h3">
              {flashcard.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {flashcard.body}
            </Typography>
            <Button
              variant="outlined"
              color="error"
              onClick={() => onDeleteFlashcard(groupId, flashcard._id)}
            >
              Delete
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FlashcardList;
