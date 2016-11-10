'use strict';

const express = require('express'),
      Todo = require('../models/todo'),
      // todos = require('../../mock/todos.json'),
      router = express.Router();

router.get('/todos', (req, res) => {
  Todo.find({}, (err, todos) => {
    if (err) {
      // do something
      return res.status(500).json({message: err.message});
    }
    res.json({todos});
  });
});

router.post('/todos', (req, res) => {
  const todo = req.body;
  Todo.create(todo, (err, todo) => {
    if (err) {
      return res.status(500).json({err: err.message});
    }
    res.json({todo, message: 'Todo created'});
  });
});

router.put('/todos/:id', (req, res) => {
  const id = req.params.id,
        todo = req.body;
  if (todo && todo._id !== id) {
    return res.status(500).json({err: "Ids don't match!"});
  }
  Todo.findByIdAndUpdate(id, todo, {new: true}, (err, todo) => {
    if (err) {
      return res.status(500).json({err: err.message});
    }
    res.json({todo, message: 'Todo updated'});
  });
});

// TODO: Add DELETE route to delete entriesapi

module.exports = router;