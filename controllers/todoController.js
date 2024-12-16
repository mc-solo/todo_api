const Todo = require("../models/Todo");

const createTodo = async (req, res) => {
  try {
    const todo = new Todo({
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed || false,
    });

    await todo.save(); // this method comes from the mongoose lib
    res.status(201).json(todo); //signals the doc has been successfully created
  } catch (error) {
    res.status(400).json({ error: error.message }); // status code 400 signals a bad request
  }
};
