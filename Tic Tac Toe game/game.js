// Selectors
const cellBtns = document.querySelectorAll('.cell');
let char = 'X';

//Event Listeners
cellBtns.forEach((cell) => {
  cell.addEventListener('click', function () {
    cell.textContent = char;
    toggleChar();
  });
});

//Functions
function toggleChar() {
  if (char === 'X') {
    char = 'O';
  } else {
    char = 'X';
  }
}

// console.log(toggleChar());
