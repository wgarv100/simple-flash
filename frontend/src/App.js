import React from "react";
import { Routes, Route, Form } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EditPage from "./pages/EditPage";
import TrashPage from "./pages/TrashPage";
import ReviewPage from "./pages/ReviewPage";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  TextField,
  Typography,
} from "@mui/material";

function App() {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h4" sx={{ justifyContent: "left" }}>
            Simple Flash
          </Typography>
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
        <Route path="/groups/:groupId" element={<EditPage />} />
        <Route path="/trash" element={<TrashPage />} />
        <Route path="/trash/:groupId" element={<TrashPage />} />
        <Route path="/review/:groupId" element={<ReviewPage />} />
      </Routes>
    </>
  );
}

export default App;
