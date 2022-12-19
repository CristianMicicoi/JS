const btnDown = document.querySelector('.btn-down');
const btnUp = document.querySelector('.btn-up');
const output = document.querySelector('.output');

btnUp.addEventListener('click', function () {
  sum(btnUp.value);
});

btnDown.addEventListener('click', function () {
  sum(btnDown.value);
});

function sum(a) {
  const result = Number(output.innerText) + Number(a);
  output.innerText = result;
}
