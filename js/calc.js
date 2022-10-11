function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

function difArray(arr) {
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sum = sum - arr[i];
  }
  return sum;
}

const buttons = document.querySelectorAll('.btn');
const deleteItem = document.querySelector('.del__btn');
const resetDisplay = document.querySelector('.reset__btn');
const showText = document.querySelector('.grid__button');
const output = document.querySelector('.output');

let number = '';
let list = [];

buttons.forEach((button) => {
  button.addEventListener('click', function () {
    output.innerText = output.innerText + button.innerText;
    if (button.innerText === '=') {
      list.push(Number(number));
      number = '';
      // calculeaza suma array
      output.innerText = output.innerText + difArray(list);
      return;
    } else if (button.innerText === '+' || button.innerText === '-') {
      list.push(Number(number));
      number = '';

      console.log(list);
    } else if (button.innerText === 'RESET') {
      reset();
    } else {
      number = number + button.innerText;
    }
  });
});

function reset() {
  number = '';
  list = [];
  output.innerText = '';
}

let arr = [1, 2, 3];

function sumaRecursiva(arr, i) {
  if (i == 0) {
    return 0;
  }
  return arr[i - 1] + sumaRecursiva(arr, i - 1);
}
console.log(sumaRecursiva(arr, arr.length));
