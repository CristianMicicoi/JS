// 1  Generate a random number;
// 2  Give the user the abillity to guess;
// 3  I they guess and they are wrong, ask them again (hint);
// 4  If they win - say that they won;

function guessGame() {
  //   console.log(randomNr);
  let randomNr = Math.floor(Math.random() * 11);
  //   console.log(fixedNr);
  let guess;

  do {
    // let randomNr = Math.floor(Math.random() * 11);
    // let guess = prompt("Guess a number between 1-10");
    guess = prompt("Guess a number between 1-10");
    console.log(guess, randomNr);
    if (randomNr > guess) {
      console.log("You guessed too low.");
    } else if (randomNr < guess) {
      console.log("Your guess was too high.");
    }
  } while (guess != randomNr);
  console.log("Your guess is right!");
}

guessGame();
