const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const groupRoutes = require("./routes/groupRoutes");
const flashcardRoutes = require("./routes/flashcardRoutes");

const app = express();
const port = 5000;
const mongo_uri = "mongodb://127.0.0.1/simple-flash";

mongoose
  .connect(mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");

    app.use(express.json());

    app.use("/api/groups", groupRoutes);
    app.use("/api/flashcards", flashcardRoutes);

    app.listen(5000, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB");
  });
