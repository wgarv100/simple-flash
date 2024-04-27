import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const DeletedGroupFlashcardList = ({ deletedGroupFlashcards }) => {
  return (
    <div className="flashcard-list">
      {deletedGroupFlashcards.map((deletedGroupFlashcard) => (
        <Card
          key={deletedGroupFlashcard._id}
          variant="outlined"
          style={{ marginBottom: "10px" }}
        >
          <CardContent>
            <Typography variant="h6" component="h3">
              {deletedGroupFlashcard.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {deletedGroupFlashcard.body}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DeletedGroupFlashcardList;
