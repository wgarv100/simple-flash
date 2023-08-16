import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import FlashcardsPage from "./pages/FlashcardsPage";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      {/* <Route path="/flashcards/:groupId" component={FlashcardsPage} /> */}
    </Routes>
  );
}

export default App;
