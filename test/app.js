// let arr = [2, 3, 3, '-', '*', 30, 6, 4, 1, '*', '+', '/', 6, '-', '+'];
let arr = [2, 3, 4, '*', 5, 6, '*', '+', '+'];
const operators = ['+', '-', '*', '/'];

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
console.log(Calcul(arr));
