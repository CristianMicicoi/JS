//Selectors
const buttons = document.querySelectorAll('.btn');
const input = document.querySelectorAll('input');
// const peopleNr = document.querySelector('#people');
const tipOutput = document.querySelector('.tip-output');
const totalOutput = document.querySelector('.total-output');

//Event Listener
// daca daca unul din inputuri e gol, nu se efectueaza eventul pe butoane
buttons.forEach((button) => {
  button.addEventListener('click', function () {
    [...buttons].forEach((element) => {
      element.classList.remove('active');
    });
    button.classList.add('active');
  });
});

// input.addEventListener('change', function () {
//   tipOutput.innerText = `$${tipAmount()}`;
// });

// peopleNr.addEventListener('change', function () {
//   //executa funcctia doar daca butonul e activ

//   const result = input.value / peopleNr.value + Number(tipAmount());
//   totalOutput.innerText = `$${result.toFixed(2)}`;
// });

//Functions

// function tipAmount() {
//   const result = input.value * buttons.value;
//   tipOutput.innerText = `$${result.toFixed(2)}`;
//   console.log(result);
// }

function tipAmount() {
  const result = input.value * buttons.value;
  return result.toFixed(2);
}
