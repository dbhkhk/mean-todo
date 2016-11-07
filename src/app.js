'use strict';

const express = require('express');

const app = express();

app.use('/', express.static('public'));

const router = express.Router();

router.get('/todos', (req, res) => {
  res.json({todos: []});
});

// TODO: Add POST route to create entries

// TODO: Add PUT route to update existing entries

// TODO: Add DELETE route to delete entries

app.use('/api', router);

app.listen(3000, () => {
  console.log('The server is running on port 3000.');
});