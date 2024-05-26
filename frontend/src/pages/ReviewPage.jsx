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
// import { useParams } from "react-router-dom";
// import { useFlashcards } from "../hooks/useFlashcards";

const ReviewPage = () => {
  const theme = useTheme();

  const [showAnswer, setShowAnswer] = useState(false);

  //   const { groupId } = useParams();
  //   const flashcards = useFlashcards(groupId);

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
            width: "25%",
            height: "25vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardContent>
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
            width: "25%",
            height: "25vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardContent>
            <Typography variant="h5" component="div">
              Answer
            </Typography>
            <Box sx={{ marginTop: "auto", padding: "16px" }}>
              <Button onClick={() => setShowAnswer(!showAnswer)}>
                Show Question
              </Button>
            </Box>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ReviewPage;
