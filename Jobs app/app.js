//Selectors

const addButton = document.querySelector('.btn-add');
const firstName = document.querySelector('#first');
const lastName = document.querySelector('#last');
const profession = document.querySelector('#job');
const birthday = document.querySelector('#b-day');

//declar lista pentru a adauga valorile din input
let persons = [];

//Event Listeners
//apasarea pe buton introduce valorile din form in lista person[]
addButton.addEventListener('click', (event) => {
  event.preventDefault();
  let person = {
    firstName: firstName.value,
    lastName: lastName.value,
    birthday: birthday.value,
    profession: profession.value,
  };
  persons.push(person);
  // firstName.value = '';
  // lastName.value = '';
  // birthday.value = '';
  // profession.value = '';

  render();
});

//Functions

function render() {
  const cardsHolder = document.querySelector('.cards-holder');
  cardsHolder.innerHTML = `
    ${persons
      .map(
        (person) => `
      <div class="card">
        <i class="fa-solid fa-user"></i>
        <div class="card-username">
            ${person.firstName}, ${person.lastName.toUpperCase()}
        </div>
        <div class="birthday">${person.birthday}</div>
        <div class="job">${person.profession}</div>
        <div class="btns-card">
          <button class="btn-updates">Update</button>  
          <button class="btn-remove">Remove</button>
        </div>
      </div>`
      )
      .join('')}`;

  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach((button) => {
    button.addEventListener('click', function (event) {
      persons.splice(event.target.value, 1);
      render();
    });
  });
}
