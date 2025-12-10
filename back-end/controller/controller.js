const Todo = require("../Models/schema.js");

const getTodos = async (req, res) => {
  // Logic to get all to-dos
  try {
    const todo = await Todo.find({});
    res.status(200).json({ todo });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTodoById = async (req, res) => {
  // Logic to get a to-do by ID
  try {
    const { id: todoId } = req.params;
    const todo = await Todo.findOne({ _id: todoId });
    if (!todo) {
      return res.status(404).json({ msg: `No task with id : ${todoId}` });
    }
    res.status(200).json({ todo });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createTodo = async (req, res) => {
  // Logic to create a new to-do
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json({ todo });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTodo = async (req, res) => {
  // Logic to update an existing to-do
  try {
    const { id: todoID } = req.params;
    const todo = await Todo.findOneAndUpdate({ _id: todoID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!todo) {
      res.status(404).json({ msg: `No task with id : ${todoID}` });
    }
    res.status(200).json({ todo });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteTodo = async (req, res) => {
  // Logic to delete a to-do
  try {
    const { id: todoId } = req.params;
    const todo = await Todo.findOneAndDelete({ _id: todoId });
    if (!todo) {
      return res.status(404).json({ msg: `No task with id : ${todoId}` });
    }
    res.status(200).json({ todo });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  getTodoById,
};
