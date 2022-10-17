// Syntax  (only strings can be put in local storage). Local storage persists even after the browser is closed

// localStorage.setItem('todoList', 'session feeding cat');
// localStorage.setItem('user', 'MC');
// localStorage.setItem('todoList', 'feed myself');

// TO remove local storage
// localStorage.clear();

// Session storage (doesn't persist after close the browser)
// sessionStorage.setItem('todo list', 'session feeding cat');

// Getting stuff back
// const user = localStorage.getItem('user');

// console.log(typeof user);

// const todoList = ['feed the cat', 'wash', 'listen to some classical music'];

const todoList = {
  todo1: 'feeding the cat',
  todo2: 'feeding myself',
};

// to have an array in our list we can do the following:
localStorage.setItem('todos', JSON.stringify(todoList));

// localStorage.setItem('todos', todoList);

// when I retrieve the data, it turns it back in an array
const retrieved = JSON.parse(localStorage.getItem('todos'));

// const retrieved = localStorage.getItem('todos');

console.log(retrieved);

// [
//     {name: 'george', poza: 'link'},
//     {name: 'fgf', poza: 'link'},
//     {name: 'ss', poza: 'link'}
// ].filter(user => user.name === 'george' && user.poza == '' || )
