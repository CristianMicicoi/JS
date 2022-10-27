//Selectors
const firstName = document.querySelector('#input-first');
const middleName = document.querySelector('#input-middle');
const lastName = document.querySelector('#input-last');

const submitBtn = document.querySelector('.btn');

//Event Listeners
submitBtn.addEventListener('click', alertMsg);
//   const message = `Are you sure that '${inputName.value}' is your name?`;d
//   alert(message);

//Functions
function alertMsg() {
  const message = `Are you sure that '${firstName.value} - ${
    middleName.value
  }, ${lastName.value.toUpperCase()}' is your name?`;

  //   alert(message);
  if (firstName.value + middleName.value + lastName.value === '') {
    alert('Error! Write your name!');
  } else {
    alert(message);
  }
}
