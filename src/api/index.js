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

// TODO: Add PUT route to update existing entries

// TODO: Add DELETE route to delete entriesapi

module.exports = router;