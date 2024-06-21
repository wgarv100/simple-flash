import React from "react";
import {
  Card,
  CardContent,
  Typography,
  useTheme,
  Button,
  Box,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useReviewFlashcards } from "../hooks/useReview";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const ReviewPage = () => {
  const theme = useTheme();

  const [showAnswer, setShowAnswer] = useState(false);
  const [shuffledFlashcards, setShuffledFlashcards] = useState([]);
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);

  const { groupId } = useParams();
  const flashcards = useReviewFlashcards(groupId);

  const shuffleFlashcards = (flashcards) => {
    let shuffled = [...flashcards];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setCurrentFlashcardIndex(0);
    return shuffled;
  };

  useEffect(() => {
    if (flashcards && flashcards.length > 0) {
      setShuffledFlashcards(shuffleFlashcards(flashcards));
    }
  }, [flashcards]);

  const goToNextFlashcard = () => {
    setCurrentFlashcardIndex(
      (prevIndex) => (prevIndex + 1) % shuffledFlashcards.length
    );
  };

  const goToPreviousFlashcard = () => {
    setCurrentFlashcardIndex(
      (prevIndex) =>
        (prevIndex - 1 + shuffledFlashcards.length) % shuffledFlashcards.length
    );
  };

  return (
    <>
      <ArrowBackIosIcon
        sx={{
          position: "absolute",
          left: 5, // Assuming you want this on the left side
          top: "50%",
          transform: "translateY(-50%)",
        }}
        onClick={goToPreviousFlashcard}
      />
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
        <ArrowForwardIosIcon
          sx={{
            position: "absolute",
            right: 5,
            top: "50%",
            transform: "translateY(-50%)",
          }}
          onClick={goToNextFlashcard}
        />
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
                {shuffledFlashcards[currentFlashcardIndex]?.body}
              </Typography>
              <Button onClick={() => setShowAnswer(!showAnswer)}>
                Show Question
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
                {shuffledFlashcards[currentFlashcardIndex]?.title}
              </Typography>
              <Button onClick={() => setShowAnswer(!showAnswer)}>
                Show Answer
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
};

export default ReviewPage;
