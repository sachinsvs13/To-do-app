const Todo = require("../Models/todo.js");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../Errors");

const getTodos = async (req, res) => {
  const todo = await Todo.find({ createdBy: req.user.userId }).sort(
    "createdAt",
  );
  res.status(StatusCodes.OK).json({ todo, total: todo.length });
};

const getTodoById = async (req, res) => {
  const {
    user: { userId },
    params: { id: todoId },
  } = req;
  const todo = await Todo.findOne({
    _id: todoId,
    createdBy: userId,
  });
  if (!todo) {
    throw new NotFoundError(`No task with id ${todoId}`);
  }
  res.status(StatusCodes.OK).json({ todo });
};

const createTodo = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const todo = await Todo.create(req.body);
  res.status(StatusCodes.CREATED).json({ todo });
};

const updateTodo = async (req, res) => {
  const {
    user: { userId },
    params: { id: todoId },
  } = req;
  const todo = await Todo.findByIdAndUpdate(
    { _id: todoId, createdBy: userId },
    req.body,
    { new: true, runValidators: true },
  );
  if (!todo) {
    throw new NotFoundError(`No task with id ${todoId}`);
  }
  res.status(StatusCodes.OK).json({ todo });
};

const deleteTodo = async (req, res) => {
  const {
    user: { userId },
    params: { id: todoId },
  } = req;
  const todo = await Todo.findByIdAndRemove({
    _id: todoId,
    createdBy: userId,
  });
  if (!todo) {
    throw new NotFoundError(`No task with id ${todoId}`);
  }
  res.status(StatusCodes.OK).json({ todo });
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  getTodoById,
};
