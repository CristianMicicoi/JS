// Selectors
const countDate = new Date('Dec 25, 2022 00:00:00').getTime();
// const countDate = new Date('Dec 25, 2022 00:01:00').getTime();

const countTime = document.getElementsByClassName('files');
const output = document.querySelector('.files');
let daysElem = document.querySelector('.d');
let hoursElem = document.querySelector('.h');
let minElem = document.querySelector('.m');
let secElem = document.querySelector('.s');

// Events

// Functions

let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDate - now;
  // time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  daysElem.innerText = days;
  hoursElem.innerText = hours;
  minElem.innerText = minutes;
  if (seconds < 10) {
    seconds = `0${seconds}`;
    secElem.innerText = seconds;
  } else {
    secElem.innerText = seconds;
  }
  if (distance <= 0) {
    clearInterval(x);
  }
  // console.log(distance);
});
