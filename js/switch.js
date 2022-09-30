// const text = "kiwi";
// let fruitNr = 0;

// switch (text) {
//   case "apple":
//     console.log("An apple a day keeps the doctor away");
//     fruitNr = 1;
//     break;
//   case "mango":
//     console.log("I love mango too");
//     fruitNr = 2;
//     break;
//   case "avocado":
//     console.log("a very healthy fruit");
//     fruitNr = 3;
//     break;
//   default:
//     console.log("What a fruit with soft stems!");
//     break;
// }

let userInput = prompt("Tell me a preffered fruit");

//if you have the capslock on and write with UPPERCASE instead of lowercase, there is a method to make everithinh lowercase:
let convertedValue = userInput.toLowerCase();
// console.log(convertedValue);

switch (convertedValue) {
  case "kiwi":
    alert("Kiwi is the most thorny fruit");
    break;
  case "mango":
    alert("I like mango fruit compote");
    break;
  case "apple":
    alert("Is the most common fruit at country side");
    break;
  default:
    alert("That fruit is common rare");
    break;
}
