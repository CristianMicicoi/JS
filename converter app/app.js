// formulele de calcul:
//pt m: se (!!) inmulteste  valoarea introdusa la 39.37;

const btns = document.querySelectorAll('.btn');
const input = document.querySelector('#input');
const output = document.querySelector('.output');
let unit = 1;
//atribuire calcul metri
const meterToInchRatio = 39.37;

// activeBtns(){
//     this.classList.toggle('active');
// };

btns.forEach((btn) => {
  btn.addEventListener('click', function () {
    unit = btn.value;
    convertToInch();
  });
});

input.addEventListener('input', function () {
  convertToInch();
});

function convertToInch() {
  const value = input.value;
  const result = value * meterToInchRatio * unit;
  output.innerText = result;
}
