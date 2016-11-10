'use strict';

const angular = require('angular');

angular.module('todoListApp')
.service('dataService', function($http, $q) {
  this.getTodos = function(cb) {
    $http.get('/api/todos').then(cb);
  };
  
  this.deleteTodo = function(todo) {
    console.log("I deleted the " + todo.name + " todo!");
  };
  
  this.saveTodos = function(todos) {
    const queue = [];
    todos.forEach(todo => {
      let request;
      if (!todo._id) {
        request = $http.post('/api/todos', todo);
      } else {
        request = $http.put('/api/todos/' + todo._id, todo).then(result => {
          return result.data.todo;
        });
      }
      queue.push(request);
    });
    return $q.all(queue).then(result => {
      return console.log("I saved " + todos.length + " todos!");
    });
  };
  
});
