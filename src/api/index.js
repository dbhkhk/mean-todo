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

// TODO: Add POST route to create entries

// TODO: Add PUT route to update existing entries

// TODO: Add DELETE route to delete entriesapi

module.exports = router;