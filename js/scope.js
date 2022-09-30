//============GLOBAL SCOPE============
let food = "apple";
let fruits = 5;
// var x = 5;

// function store() {
//   //===========FUNCTION SCOPE=============
//   let food = "banana";
//   let fruits = 50;
//   //   console.log(food, fruits);
//   var x = 5;
// }
// store();

function store() {
  //   console.log(food);
  // let food = "apple";
  // let fruits = 5;
  //   food = "kiwi";
  console.log(food);
}
// store();
// console.log(food);

//============BLOCK SCOPE============

// for (let fruits = 0; fruits < 10; fruits++) {
//   console.log(fruits);
// }

// for (var x = 0; x < 10; x++) {
//   console.log(x);
// }
// // console.log(food, fruits);
// console.log("Global" + x);

// if (true) {
//   let food = "kiwi";
// //   var x = 10;
//   //   console.log(food, x);
// }
// console.log(food, x);

if (true) {
  //   console.log(food);
}
store();
// console.log(food);
