'use strict';

const express = require('express'),
      router = require('./api');

const app = express();

require('./database');

app.use('/', express.static('public'));

app.use('/api', router);

app.listen(3000, () => {
  console.log('The server is running on port 3000.');
});