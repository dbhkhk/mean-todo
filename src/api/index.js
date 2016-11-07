'use strict';

const express = require('express'),
      todos = require('../../mock/todos.json'),
      router = express.Router();

router.get('/todos', (req, res) => {
  res.json({todos});
});

// TODO: Add POST route to create entries

// TODO: Add PUT route to update existing entries

// TODO: Add DELETE route to delete entriesapi

module.exports = router;