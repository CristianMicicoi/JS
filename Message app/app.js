const input = document.querySelector('#msg');
const submit = document.querySelector('#btn');
const output = document.querySelector('.output');

submit.addEventListener('click', function () {
  const result = input.value;
  if (result === '') {
    alert('Your input is empty!');
  } else {
    output.innerText = result;
  }
  input.value = '';
});
