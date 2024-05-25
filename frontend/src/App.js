import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import TrashCanPage from "./pages/TrashCanPage";
import { AppBar, Toolbar, Button, useTheme, Box } from "@mui/material";

function App() {
  const theme = useTheme();
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/trash">
            Trash
          </Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/groups/:groupId" element={<DashboardPage />} />
        <Route path="/trash" element={<TrashCanPage />} />
        <Route path="/trash/:groupId" element={<TrashCanPage />} />
      </Routes>
    </>
  );
}

export default App;
