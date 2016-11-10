'use strict';

const express = require('express'),
      router = require('./api'),
      bodyParser = require('body-parser');

const app = express();

require('./database');
require('./seed');

app.use('/', express.static('public'));
app.use(bodyParser.json());

app.use('/api', router);

app.listen(3000, () => {
  console.log('The server is running on port 3000.');
});