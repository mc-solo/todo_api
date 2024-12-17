const express = require("express");
const router = express.Router();
const { createTodo } = require("../controllers/todoController");

router.post("/", createTodo);

module.exports = router;
