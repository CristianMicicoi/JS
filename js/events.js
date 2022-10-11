// const button = document.querySelector("#submit");
// const todoList = document.querySelector("#todo-list");
// const todoNr = document.querySelector(".todo-nr b");

// const items = todoList.children;

// // ATTACH AN EVENT LISTENER (click, scroll, resizing the browser and many others.....)
// // can add inline function just for that element or add a function outside(outline) that I can re-use it
// button.addEventListener("click", function () {
//   const newItem = document.createElement("li");
//   newItem.classList.add("item");
//   newItem.innerText = `Item ${items.length + 1}`;
//   todoList.appendChild(newItem);
//   todoNr.innerText = items.length;
// });

// function addItem() {
//   console.log("new item added");
// }

const button = document.querySelector("#submit");
const todoList = document.querySelector("#todo-list");
const todoNr = document.querySelector(".todo-nr b");
const mainTitle = document.querySelector(".main-title");
const nameInput = document.querySelector(".name-input");

const items = todoList.children;

// button.addEventListener("click", function () {
//   mainTitle.style.color = "red";
//   mainTitle.style.fontSize = "50px";
// });

// to style an element and add an existing css class to our element and writting less inline style(like above), can do this:
// button.addEventListener("click", function (event) {
//   console.log(event);
//   // mainTitle.classList.add("JScolor");
//   // if I want to remove the css class above:
//   // mainTitle.classList.remove("JScolor");
//   //or I can use the "togle" element, that checks if I have the class on top and remove it, but if I don't have the class, will add it
//   mainTitle.classList.toggle("JS-color");
// });

// add a specific key to activate the button on page
// button.addEventListener("keydown", function (event) {
//   if (event.keyCode === 65) {
//     mainTitle.classList.toggle("JS-color");
//   }
// });

// Chapter 2, lesson 6 - Event Bubbling
//how to delete an item from list
button.addEventListener("click", function (e) {
  // adding preventDefault, the form stop refresh itself
  e.preventDefault();
  // Create element
  const newItem = document.createElement("li");
  // Adding class
  newItem.classList.add("item");
  // Adding the text
  newItem.innerText = nameInput.value;
  todoList.appendChild(newItem);
  todoNr.innerText = items.length;
  // Delete the value from the input
  nameInput.value = "";
  // create the element and attaching the listener
  newItem.addEventListener("click", deleteItem);
});

for (item of items) {
  item.addEventListener("click", deleteItem);
}

function deleteItem(e) {
  e.stopPropagation();
  e.target.remove();
}

todoList.addEventListener("click", function () {
  console.log("The UL Executes");
  todoList.classList.toggle("fade");
});
