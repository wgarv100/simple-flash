import React from "react";
import {
  Card,
  CardContent,
  Typography,
  useTheme,
  Button,
  Box,
} from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useReviewFlashcards } from "../hooks/useReview";

const ReviewPage = () => {
  const theme = useTheme();

  const [showAnswer, setShowAnswer] = useState(false);

  const { groupId } = useParams();
  const flashcards = useReviewFlashcards(groupId);

  // console.log("groupId", groupId);

  console.log(flashcards);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Box sx={{ ...theme.mixins.toolbar }} />
      {showAnswer ? (
        <Card
          variant="outlined"
          sx={{
            width: "50%",
            height: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Typography variant="h5" component="div">
              Question
            </Typography>
            <Button onClick={() => setShowAnswer(!showAnswer)}>
              Show Answer
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card
          variant="outlined"
          sx={{
            width: "50%",
            height: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Typography variant="h5" component="div">
              Answer
            </Typography>
            <Button onClick={() => setShowAnswer(!showAnswer)}>
              Show Question
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ReviewPage;
