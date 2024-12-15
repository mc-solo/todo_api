const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const mongo_uri = process.env.MONGO_URI;

app.use(bodyParser.json());

// connect to database
const connectDB = async () => {
  try {
    await mongoose.connect(mongo_uri);
    console.log("connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDb", error);
  }
};

connectDB();

app.listen(PORT, () => console.log("app is running on port:", PORT));
