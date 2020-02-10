"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todos_1 = require("../models/todos");
const TODOS = [];
exports.createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todos_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'Created the todo.', createTodo: newTodo });
};
