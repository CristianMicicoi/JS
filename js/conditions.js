// == Equal to
// 5 == 5 -> TRUE
// 5 == 4 -> FALSE

// Not equal
// 4 != 3 -> TRUE
// 4 != 4 -> FALSE

// Greater or smaller
// 5 > 10 FALSE
// 10 > 6 TRUE
// 10 >= 10 TRUE
// 20 <= 20 TRUE

//NEVER EVER USE DOUBLE EQUALS, USE THE TRIPLE

// if / else

// const age = 20;
// const bank = 20;

// if (age >= 18) {
//   console.log("You are old enough to enter");
//   //

//   //SKIPPED
// } else if (bank > 30) {
//   console.log("Cool, you have enough money!");
// } else {
//   console.log("You are either too young or have no money!");
// }

// const age = 15;
// const bank = 20;

// if (age >= 18) {
//   console.log("You are old enough to enter");
//   //

//   //SKIPPED
// } else if (bank > 30) {
//   console.log("Cool, you have enough money!");
// } else {
//   console.log("You are either too young or have no money!");
// }

const name = null;

if (null) {
  console.log("This value is truthy");
} else {
  console.log("This value is falsey");
}

//FALSE, 0, "", null, undefined, NaN
