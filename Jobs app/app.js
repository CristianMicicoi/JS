//Selectors

const addButton = document.querySelector('.btn-add');
const firstName = document.querySelector('#first');
const lastName = document.querySelector('#last');
const profession = document.querySelector('#job');
const birthday = document.querySelector('#b-day');
const btnUpdate = document.querySelector('.btn-update');

//declar lista pentru a adauga valorile din input
let persons = [
  {
    firstName: 'test',
    lastName: 'test',
    profession: 'Frontend Developer',
    birthday: '1990-10-13',
  },
];

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
  //clear inputs value after click on add button
  firstName.value = '';
  lastName.value = '';
  birthday.value = '';
  profession.value = '';

  render();
});

//butonul "update" din form memoreaza schimbarile facute dupa apasarea butonului "update" din card si le afiseaza din nou in cardul modificat
btnUpdate.addEventListener('click', (event) => {
  event.preventDefault();
  const index = event.target.value;
  let person = {
    firstName: firstName.value,
    lastName: lastName.value,
    birthday: birthday.value,
    profession: profession.value,
  };

  persons[index] = person;
  //clear inputs value after click on add button
  firstName.value = '';
  lastName.value = '';
  birthday.value = '';
  profession.value = '';

  render();
});

//Functions
//CREAREA functiei render() cu structura dorita pentru fiecare card afisat dupa apasarea butonului add din form
//CREARE functionalitate buton "remove" pentru a sterge cardul selectat(adaugare valoare buton si creare event listener- splice)
//CREARE functionalitate buton "update" din card pentru a transfera informatiile din cardul selectat inapoi in form pentru modificare
//CREARE functionalitate buton "update" din form pentru a transfera inapoi datele modificate din cardul selectat
function render() {
  const cardsHolder = document.querySelector('.cards-holder');
  cardsHolder.innerHTML = `
    ${persons
      .map(
        (person, index) => `
      <div class="card">
        <i class="fa-solid fa-user"></i>
        <div class="card-username">
            ${person.firstName}, ${person.lastName.toUpperCase()}
        </div>
        <div class="birthday">${person.birthday}</div>
        <div class="job">${person.profession}</div>
        <div class="btns-card">
          <button class="btn-update-card" value=${index}>Update</button>  
          <button class="btn-remove" value=${index}>Remove</button>
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

  const updateBtn = document.querySelectorAll('.btn-update-card');
  updateBtn.forEach((button) => {
    button.addEventListener('click', function (event) {
      const index = event.target.value;
      firstName.value = persons[index].firstName;
      lastName.value = persons[index].lastName;
      profession.value = persons[index].profession;
      birthday.value = persons[index].birthday;
      btnUpdate.value = index;
      // console.log(index);
    });
  });
}
render();
