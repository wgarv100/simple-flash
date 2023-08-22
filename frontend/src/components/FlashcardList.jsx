import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const FlashcardList = ({ flashcards }) => {
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
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FlashcardList;
