// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

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
    todo.remove();
  }
  // Check-mark
  if (item.classList[0] === 'complete-btn') {
    const todo = item.parentElement;
    todo.classList.toogle('completed');
  }
}
