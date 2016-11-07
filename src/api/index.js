'use strict';

const express = require('express');

const router = express.Router();

router.get('/todos', (req, res) => {
  res.json({todos: []});
});

// TODO: Add POST route to create entries

// TODO: Add PUT route to update existing entries

// TODO: Add DELETE route to delete entriesapi

module.exports = router;