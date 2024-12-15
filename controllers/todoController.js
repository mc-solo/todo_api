const Todo = require("../models/Todo");

exports.CreateTodo = async (req, res) => {
  try {
    const todo = new Todo(req.body);
    await todo.save();
  } catch (err) {}
};
