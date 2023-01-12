const createCard = document.querySelector('.create-card');
const addBtn = document.querySelector('.add-btn');
const delBtn = document.querySelector('.del-btn');
const saveCard = document.querySelector('.save-card');
const closeCard = document.querySelector('.close-card');
const inputQ = document.querySelector('#question');
const inputA = document.querySelector('#answer');
// const questionToShowAnswer = document.querySelector('.Q');
// const answer = document.querySelector('.A');
let flashcards = []; //am creat o lista globala pentru a salva obiectul flashCard

addBtn.addEventListener('click', function () {
  createCard.classList.remove('hidden');
});

delBtn.addEventListener('click', function () {
  flashcards = [];
  renderFlashcards();
});

saveCard.addEventListener('click', function () {
  // console.log(saveCard.value);
  let flashCard = { question: inputQ.value, answer: inputA.value }; //am creat un obiect pe care il pot salva in lista globala declarata, ca sa fie afisat sub forma asta in consola
  flashcards.push(flashCard);
  renderFlashcards();
  inputQ.value = '';
  inputA.value = '';
});

closeCard.addEventListener('click', function () {
  createCard.classList.add('hidden');
});

function renderFlashcards() {
  let flashcardsContainer = document.querySelector('.flashcards-container');
  const flashcardsHTML = flashcards
    .map((element, index) => {
      return `<div class="flashcard card" id="${index}">
              <button class="btn flashcard__btn">Delete</button>
              <hr>
              <div class="flashcard__question">${element.question}</div>
              <div class="flashcard__answer hidden">
                <span>${element.answer}</span>
              </div>
            </div>`;
    })
    .join('');
  flashcardsContainer.innerHTML = flashcardsHTML;
  const flashcardsNode = document.querySelectorAll('.flashcard');
  flashcardsNode.forEach((flashcard) => {
    flashcard.addEventListener('click', function () {
      const flashcardAnswer = flashcard.querySelector('.flashcard__answer');
      flashcardAnswer.classList.toggle('hidden');
    });
    const flashcardButton = flashcard.querySelector('.flashcard__btn');
    flashcardButton.addEventListener('click', function (event) {
      event.stopPropagation(); //pentru a nu face click "dublu" atat de pe card si de pe minus
      flashcards.splice(flashcard.id, 1);
      renderFlashcards();
    });
  });
}
