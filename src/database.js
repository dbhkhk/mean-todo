'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-todo', err => {
  if (err) {
    console.log('Failed connecting Mongodb!');
  } else {
    console.log('Successfully connected to Mongo!');
  }
});