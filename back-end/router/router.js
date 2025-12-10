const express = require('express');
const router = express.Router();

const {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
    getTodoById
} = require('../controller/controller')

// get To do list
router.get('/',getTodos);

// get single To do list
router.get('/:id',getTodoById);

// Create To do list
router.post('/',createTodo);

// update To do list
router.patch('/:id',updateTodo);

// delete To do list
router.delete('/:id',deleteTodo);

module.exports = router;