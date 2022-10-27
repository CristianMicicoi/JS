//Selectors

const btns = document.querySelectorAll('.btn');

const submit = document.querySelector('.submit');

const thanksCard = document.querySelector('.thanks');

//Event Listeners

btns.forEach((button) => {
  button.addEventListener('click', function () {
    [...btns].forEach((element) => {
      element.classList.remove('active');
    });
    button.classList.add('active');
  });
});

submit.addEventListener('click', function () {
  const button = document.querySelector('.btn.active');

  const note = button.innerText;

  thanksCard.style.display = 'block';

  const selectNote = document.querySelector('.select__note');

  selectNote.innerText = note;
});

//Functions
