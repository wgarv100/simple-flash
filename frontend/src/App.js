import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import TrashCanPage from "./pages/TrashCanPage";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/groups/:groupId" element={<DashboardPage />} />
      <Route path="/trash" element={<TrashCanPage />} /> {/* Add this line */}
    </Routes>
  );
}

export default App;
