const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("./controllers/todoController");
require("dotenv").config();
const todoRoutes = require("./routes/todos");

const app = express();
const PORT = process.env.PORT || 5000;
const mongo_uri = process.env.MONGO_URI;

// middleware
app.use(bodyParser.json());
app.use(express.json());
app.use("/api/todos", todoRoutes); //prefix all todo routes with /api/todos

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
// console.log(mongo_uri);
app.get("/", (req, res) => {
  res.send("welcome");
});
app.listen(PORT, () => console.log("app is running on port:", PORT));
