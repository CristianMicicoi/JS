const addBtn = document.querySelector('.add-btn');
const delBtn = document.querySelector('.del-btn');
const saveCard = document.querySelector('.save-card');
const closeCard = document.querySelector('.close-card');
const minus = document.querySelector('.minus');
const inputQ = document.querySelector('#question');
const inputA = document.querySelector('#answer');
// const questionToShowAnswer = document.querySelector('.Q');
// const answer = document.querySelector('.A');
const cardOutput = document.querySelector('.qa-output');
let flashcards = []; //am creat o lista globala pentru a salva obiectul flashCard

addBtn.addEventListener('click', function () {
  console.log(addBtn.value);
});

delBtn.addEventListener('click', function () {
  console.log(delBtn.value);
});

saveCard.addEventListener('click', function () {
  // console.log(saveCard.value);
  let flashCard = { question: inputQ.value, answer: inputA.value }; //am creat un obiect pe care il pot salva in lista globala declarata, ca sa fie afisat sub forma asta in consola
  // inputQ.value = '';
  // inputA.value = '';
  console.log(flashcards);
});

closeCard.addEventListener('click', function () {
  console.log(closeCard.value);
});

minus.addEventListener('click', function (event) {
  console.log('minus on-click wipe out the card');
  event.stopPropagation(); //pentru a nu face click "dublu" atat de pe card si de pe minus
});

cardOutput.addEventListener('click', function () {
  console.log('This is question-output card!');
});
