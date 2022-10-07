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

// button.addEventListener("click", function () {
//   mainTitle.style.color = "red";
//   mainTitle.style.fontSize = "50px";
// });

// to style an element and add an existing css class to our element and writting less inline style(like above), can do this:
button.addEventListener("mouseover", function () {
  // mainTitle.classList.add("JScolor");
  // if I want to remove the css class above:
  // mainTitle.classList.remove("JScolor");
  //or I can use the "togle" element, that checks if I have the class on top and remove it, but if I don't have the class, will add it
  mainTitle.classList.toggle("JS-color");
});
