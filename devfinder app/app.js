const addBtn = document.querySelector('.btn-add');
const inputName = document.querySelector('#name');
const inputUser = document.querySelector('#username');
const inputData = document.querySelector('#date');
const inputBio = document.querySelector('#bio');
const inputRepository = document.querySelector('#repos');
const inputFollowers = document.querySelector('#flws');
const inputFollowing = document.querySelector('#flw');
const inputLocation = document.querySelector('#location');
const createCard = document.querySelector('.create-card');

let devCards = []; //am creat o lista globala pentru a salva obiectul devcard

addBtn.addEventListener('click', function () {
  let devcard = {
    name: inputName.value,
    username: inputUser.value,
    date: inputData.value,
    bio: inputBio.value,
    repos: inputRepository.value,
    followers: inputFollowers.value,
    following: inputFollowing.value,
    location: inputLocation.value,
  }; //am creat un obiect pe care il pot salva in lista globala declarata, ca sa fie afisat sub forma asta in consola
  devCards.push(devcard);
  saveToLocalStorage(devcard);
  renderDevCards();
  //   resetForm();
});

function saveToLocalStorage(card) {
  let cardList;
  if (localStorage.getItem('cards') === null) {
    cardList = [];
  } else {
    cardList = JSON.parse(localStorage.getItem('cards'));
  }
  cardList.push(card);
  localStorage.setItem('cards', JSON.stringify(cardList));
}

function renderDevCards() {
  let cardsContainer = document.querySelector('.cards-container');
  let cardList;
  if (localStorage.getItem('cards') === null) {
    cardList = [];
  } else {
    cardList = JSON.parse(localStorage.getItem('cards'));
  }
  console.log(cardList);
  const myJSON = JSON.parse(cardList);
  myJSON
    .map((element, index) => {
      return `<div class="card create-card" id="${index}">
                    <div class="card__personal-info">
                        Name: ${element.name} <br>
                        Username: ${element.username} <br>
                        Join date: ${element.date} <br>
                        Description: ${element.bio} <br>
                    </div>
                    <div class="card__social-info">
                        Repositories: ${element.repos} <br>
                        Followers: ${element.followers} <br>
                        Fllowing: ${element.following} <br>
                    </div>
                    <div class="card__location-icon"><i class="fa-solid fa-location-dot"></i> ${element.location}</div>
                    <button class="btn card__btn-del" value="delete-card">Delete</button>
                </div>`;
    })
    .join('');
  cardsContainer.innerHTML = cardList;
  const cardNode = document.querySelectorAll('.card');
  cardNode.forEach((card) => {
    const delBtn = card.querySelector('.card__btn-del');
    delBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      devCards.splice(card.id, 1);
      renderDevCards();
    });
  });
}

function resetForm() {
  inputName.value = '';
  inputUser.value = '';
  inputData.value = '';
  inputBio.value = '';
  inputRepository.value = '';
  inputFollowers.value = '';
  inputFollowing.value = '';
  inputLocation.value = '';
}
