//DOM - document object model ==================================
//document.------ return a html collection
// HTML collections contain only hold node elements, NodeList contains node elements, node texts, node comments(ex)
// const headers = document.getElementsByTagName("h2");
// const list = document.getElementsByClassName("item");
// const button = document.getElementById("submit");

// console.log(button);

// query selector return a nodelist
// const headers = document.querySelector("h2");
// const headers = document.querySelectorAll("h2");
// console.log(headers[0]);

// const list = document.querySelector("#submit");

// console.log(list);

// for the h2(item) from the ul list
// const list = document.querySelector("h2.item");

// console.log(list);

//for the <a> tag in ul
// const list = document.querySelector("#list a");

// console.log(list);

// const collectionItems = document.getElementsByClassName("item");
// const nodeItems = document.querySelectorAll(".item");

// console.log(collectionItems, nodeItems);

// const collectionItems = document.getElementsByClassName("item");
// const nodeItems = document.querySelector("#todo-list");

// console.log(nodeItems.childNodes);
// console.log(nodeItems.children);

// we can use for loops - with document.getElement......
// const collectionItems = document.getElementsByClassName("item");
// const nodeItems = document.querySelectorAll(".item");

// for (item of nodeItems) {
//   console.log(item);
// }

// .forEach works only for html collection
// nodeItems.forEach(function (item) {
//   console.log(item);
// });

//to add a new item in list vith JS:
// with HTML collection
// const collectionItems = document.getElementsByClassName("item");
// const todoList = document.getElementById("todo-list");
// const todoNr = document.getElementsByClassName("todo-nr")[0];

// const newItem = document.createElement("li");
// newItem.classList.add("item");
// newItem.innerText = "Item 3";

// const anotherItem = document.createElement("li");
// anotherItem.classList.add("item");
// anotherItem.innerText = "Item 3";

// todoList.appendChild(newItem);
// todoList.appendChild(anotherItem);

// // update the ammount of items that we have
// todoNr.innerText = collectionItems.length;

// console.log(collectionItems);

// we can use for loops - with querySelector(wich is static, doesn't show in console that add a new item, just show the parent node).....
// collectionItems.forEach((element) => {
//   console.log(element);
// });

let nodeItems = document.querySelectorAll(".item");
const todoList = document.querySelector("#todo-list");
const items = todoList.children;
console.log(items);
const todoNr = document.querySelector(".todo-nr");

const newItem = document.createElement("li");
newItem.classList.add("item");
newItem.innerText = "Item 3";

const anotherItem = document.createElement("li");
anotherItem.classList.add("item");
anotherItem.innerText = "Item 4";

todoList.appendChild(newItem);
todoList.appendChild(anotherItem);

nodeItems = document.querySelectorAll(".item");
todoNr.innerText = nodeItems.length;

console.log(items);
// Nodelist don't update itself, but html collection do that!!
