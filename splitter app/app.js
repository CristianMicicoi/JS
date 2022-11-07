//Selectors
const buttons = document.querySelectorAll('.btn');

const inputs = document.querySelectorAll('input');

const tipOutput = document.querySelector('.tip-output');

const totalOutput = document.querySelector('.total-output');

//Event Listener

buttons.forEach((button) => {
  button.addEventListener('click', function (event) {
    // daca unul din input-uri e gol, nu se efectueaza event-ul pe butoane
    const totalAmount = document.querySelector('#bill')?.value;
    const persons = document.querySelector('#people')?.value;
    if (totalAmount && persons) {
      //add remove active class
      const activeBtn = event.target;
      addRemoveActiveClass(activeBtn);
      //calculate and display amount
      calculateAndDisplayAmount(activeBtn);
    }
    //add validation on inputs and message
  });
});

function addRemoveActiveClass(clickedBtn) {
  [...buttons].forEach((element) => {
    element.classList.remove('active');
  });
  clickedBtn.classList.add('active');
}

//adaug eventListener change pe fiecare input
inputs.forEach((input) => {
  input.addEventListener('input', function () {
    //daca am buton selectat, recalculez
    const activeBtn = document.querySelector('.btn.active');
    if (activeBtn) {
      calculateAndDisplayAmount(activeBtn);
    }
    //daca nu am buton selectat, nu fac nimic
  });
});

function calculateAndDisplayAmount(activeBtn) {
  //get inputs values
  const totalAmount = document.querySelector('#bill')?.value;
  const persons = document.querySelector('#people')?.value;
  //calculate amount
  const tipAmount = (totalAmount * activeBtn?.value ?? 1) / persons;
  const totalPerson = totalAmount / persons + tipAmount;
  //display calculated amount
  tipOutput.innerText = tipAmount;
  totalOutput.innerText = totalPerson;
}
