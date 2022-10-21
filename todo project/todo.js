// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// Event Listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

// Functions
function addTodo(event) {
  //Prevent form from submitting (default form of the button restarting the page)
  event.preventDefault();
  //Todo div- create a div and add the class "todo" for it
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  //Create lists in the div above and adding class
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  // add todo to local storage
  saveLocalTodos(todoInput.value);
  //Add 'check-mark' button
  const completedButton = document.createElement('buton');
  //adding in the button the '<i>' tag
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);
  // Create 'delete' button
  const trashButton = document.createElement('buton');
  //adding in the button the '<i>' tag
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);
  // append to list
  todoList.appendChild(todoDiv);
  // Clear input value
  todoInput.value = '';
}

function deleteCheck(e) {
  const item = e.target;
  // Delete todo
  if (item.classList[0] === 'trash-btn') {
    const todo = item.parentElement;
    // add animation when delete lists
    todo.classList.add('fall');
    removeLocalTodos(todo);
    todo.addEventListener('transitionend', function () {
      todo.remove();
    });
  }

  // Check-mark
  if (item.classList[0] === 'complete-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case 'all':
        todo.style.display = 'flex';
        break;
      case 'completed':
        if (todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
      case 'uncompleted':
        if (!todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
    }
  });
}

// save in local storage
function saveLocalTodos(todo) {
  //CHECK -> do I already have things in there?
  let todos;
  if (localStorage.getItem('todos') === null) {
    //if I don't have a "todos list/item" is gonna create an empty array
    todos = [];
    // if I have a "todos list/item" i'm gonna be let with the array down here
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos() {
  //CHECK -> do I already have things in there?
  let todos;
  if (localStorage.getItem('todos') === null) {
    //if I don't have a "todos list/item" is gonna create an empty array
    todos = [];
    // if I have a "todos list/item" i'm gonna be let with the array down here
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.forEach(function (todo) {
    //Todo div- create a div and add the class "todo" for it
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Create lists in the div above and adding class
    const newTodo = document.createElement('li');
    newTodo.innerText = todo;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // add todo to local storage

    //Add 'check-mark' button
    const completedButton = document.createElement('buton');
    //adding in the button the '<i>' tag
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    // Create 'delete' button
    const trashButton = document.createElement('buton');
    //adding in the button the '<i>' tag
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    // append to list
    todoList.appendChild(todoDiv);
  });
}

function removeLocalTodos(todo) {
  //CHECK -> do I already have things in there?
  let todos;
  if (localStorage.getItem('todos') === null) {
    //if I don't have a "todos list/item" is gonna create an empty array
    todos = [];
    // if I have a "todos list/item" i'm gonna be let with the array down here
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  const todoIndex = todo.children[0].innerText;
  //to get an list element index, from what position to remove an element and second element means how many to remove from local storage
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem('todos', JSON.stringify(todos));
}
