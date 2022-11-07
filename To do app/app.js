//Selectors

const input = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-btn');

// declar lista pentru adaugare valoare input ([]- pentru lista, {}- pentru obiect)
let toDoList = [];

//Event Listeners
//cand apas pe buton acesta trebuie sa introduca valoarea inputului in lista creata(toDoList)
todoButton.addEventListener('click', function (event) {
  event.preventDefault();
  if (!input.value) return;
  toDoList.push(input.value);
  console.log(toDoList);
  render();
  //CLEAR todo input value
  input.value = '';
});

//Functions

function render() {
  const list = document.querySelector('.todo-list');
  list.innerHTML = `
    ${toDoList
      .map(
        (element, index) =>
          `<li>
            <span>${element}</span>
            <button class="trash-btn" value="${index}">
              <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
          </li>`
      )
      .join('')}
  `;

  const trashButtons = document.querySelectorAll('.trash-btn');
  trashButtons.forEach((button) => {
    button.addEventListener('click', function (event) {
      toDoList.splice(event.target.value, 1);
      render();
    });
  });
}
