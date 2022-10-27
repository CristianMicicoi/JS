// function difArray(arr) {
//   let sum = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     sum = sum - arr[i];
//   }
//   return sum;
// }

//Selectors

const buttons = document.querySelectorAll('.btn');

const deleteItem = document.querySelector('.del__btn');

const resetDisplay = document.querySelector('.reset__btn');

const showText = document.querySelector('.grid__button');

const output = document.querySelector('.output');

const prio0 = ['(', ')'];
const prio1 = ['*', '/'];
const prio2 = ['+', '-'];

const operators = ['+', '-', '*', '/'];

let number = '';

let list = [];

let fp = [];

let st = [];

//Event Listeners

buttons.forEach((button) => {
  button.addEventListener('click', function () {
    // debugger;
    output.innerText += button.innerText;
    if (button.innerText === '=') {
      fp.push(Number(number));
      for (let i = st.length - 1; i >= 0; i--) {
        fp.push(st.at(i));
        st.pop();
      }
      // const ultimul = st.length - 1;
      // fp.push(st.at(ultimul));
      // st.pop();
      number = '';
      // calculeaza sumArray sau difArray
      output.innerText = Calcul(fp);
      return;
      // dupa else if, pentru suma array se foloseste: "(button.innerText === '+')"; pentru diferenta:  "|| (button.innerText === '-')"
    } else if (operators.includes(button.innerText)) {
      if (prio1.includes(button.innerText)) {
        fp.push(Number(number));
        fp.push(button.innerText);
        number = '';
      }
      fp.push(Number(number));
      st.push(button.innerText);
      number = '';
    } else if (button.innerText === 'RESET') {
      reset();
    } else {
      number = number + button.innerText;
    }
  });
});

/*
buttons.forEach((button) => {
  button.addEventListener('click', function () {
    output.innerText += button.innerText;
    if (button.innerText === '=') {
      list.push(Number(number));
      number = '';
      // calculeaza sumArray sau difArray
      output.innerText = output.innerText + sumArray(list);
      return;
      // dupa else if, pentru suma array se foloseste: "(button.innerText === '+')"; pentru diferenta:  "|| (button.innerText === '-')"
    } else if (button.innerText === '+') {
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
*/

//Functions

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

function reset() {
  number = '';
  list = [];
  output.innerText = '';
  fp = [];
  st = [];
}

let arr = [2, 3, 3, '-', '*', 30, 6, 4, 1, '*', '+', '/', 6, '-', '+'];

function Calcul(array) {
  let result = '';
  let i = 0;
  while (!operators.includes(array[i])) {
    i++;
  }
  switch (array[i]) {
    case '+':
      result = array[i - 2] + array[i - 1];
      break;
    case '-':
      result = array[i - 2] - array[i - 1];
      break;
    case '*':
      result = array[i - 2] * array[i - 1];
      break;
    case '/':
      result = array[i - 2] / array[i - 1];
      break;
  }
  array[i - 2] = result;
  array.splice(i - 1, 2);
  if (array.length === 1) {
    return array[0];
  }

  return Calcul(array);
}
// console.log(Calcul(arr));

// let arr = [1, 2, 3];

// function sumaRecursiva(arr, i) {
//   if (i == 0) {
//     return 0;
//   }
//   return arr[i - 1] + sumaRecursiva(arr, i - 1);
// }
// console.log(sumaRecursiva(arr, arr.length));
