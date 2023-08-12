import React from "react";

const Flashcard = ({ flashcard }) => {
  return (
    <div className="flashcard">
      <h2>{flashcard.title}</h2>
      <p>{flashcard.body}</p>
    </div>
  );
};

export default Flashcard;
