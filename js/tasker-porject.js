// JS Tasker mini- proiect ===================================
const submitButton = document.getElementById("btnSubmit");
const tasks = document.getElementById("tasks");
const messageElement = document.getElementById("message");
// extragere buton "clear list" din DOM
const clearButton = document.getElementById("btnClear");

submitButton.addEventListener("click", addTask);
//punem un event listener pe tasks, din lista integrala de mai sus
tasks.addEventListener("click", handleTaskClick);
// event listener pt butonul de "clear list"
clearButton.addEventListener("click", clearList);

const greetingMessage = "Good, you have no tasks today!";

// apare daca nu avem niciun task activ
displayMessage(greetingMessage);

// functia pentru "clear list"
function clearList() {
  // se iau toate elementele dupa un class name
  const taskList = tasks.getElementsByClassName("list-group-item");
  // pentru a le sterge:
  while (taskList.length > 0) {
    // sterge tot timpul primul element din lista
    taskList[0].parentNode.removeChild(taskList[0]);
  }
  displayMessage(greetingMessage);
}

//functie pentru event handler, ca sa pot taia din lista taskurile efectuate
function handleTaskClick(event) {
  // pentru a detecta de unde a venit evenimentul din elementul html
  const style = event.target.style;
  // facem o validare pentru a putea reloca taskul taiat(din greseala)
  if (!style.textDecoration) {
    style.textDecoration = "line-through";
  } else {
    // sa stearga linia care taie taskul cand dam din nou clic pe task
    style.textDecoration = "";
  }
}

function addTask() {
  const newTask = document.getElementById("newTask");
  if (inputIsValid(newTask.value)) {
    // partea de adaugare a taskurilor in lista se poate face in 2 feluri:
    // tasks.innerHTML += '<li class="list-group-item">' + newTask.value + '</li>';
    //sau template literal cu "`"
    tasks.innerHTML += `<li class="list-group-item">${newTask.value}</li>`;
    newTask.value = "";
    // face mesajul ascuns ca sa nu apara dupa ce dau submit la un task sau cand nu sunt taskuri active
    messageElement.style.visibility = "hidden";
  } else {
    // atunci cand dau submit fara sa introduc un task
    displayMessage("Please provide non-empty input!");
  }
}

function displayMessage(message) {
  messageElement.innerText = message;
  // mesajul este activ cat timp dau submit fara a scrie vreun task
  messageElement.style.visibility = "visibile";
}

function inputIsValid(input) {
  if (input) {
    return true;
  }
  return false;
}
