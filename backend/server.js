const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT;
const mongo_uri = process.env.MONGO_URI;

mongoose
  .connect(mongo_uri)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB");
  });

app.listen(5000, () => {
  console.log(`Server is running on port ${port}`);
});
