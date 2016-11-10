'use strict';

const Todo = require('./models/todo.js');

const todos = [
  'Clean car',
  'Wash clothes',
  'Vacuum carpet'
];

todos.forEach((todo, i) => {
  Todo.find({name: todo}, (err, todos) => {
    if (!err && !todos.length) {
      Todo.create({completed: false, name: todo});
    }
  });
});