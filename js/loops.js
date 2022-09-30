//FOR LOOPS

// const text = [
//   "Taking a walk in park",
//   "Walking the dog in the park",
//   "The dog in the park is dangerous",
//   "Cat is ugly",
// ];

// for (let i = 0; i < text.length; i++) {
//   //   console.log(i);
//   console.log(text[i]);
// }

// for (let i = 0; i <= 100; i++) {
//   //  run some code
//   console.log(i);
//   //   if (i === 40) {
//   //     console.log("Hey there, you arrived at 20!");
//   //     // continue;
//   //     break;
//   //   }
//   //   //run some code
//   //   //   console.log(i);
// }

// console.log("hey, finish");

//FOR ARRAYS use (of)
// const names = ["Mc", "Dev Ed", "Logic", "Tea", "Tool"];

// for (let name of names) {
//   console.log(name);
// }

// for (let name of names) {
//   if (name === "Logic") {
//     console.log("STOP");
//     break;
//   }
//   console.log(name);
// }

//SPECIFICALY for ARRAYS
// names.forEach(function (name, index) {
//   if(name === 'Logic'){
//     console.log('STOP')
//     break;  //it's not gonna work!!
//   }
// });

//FOR objects use (in)

// const user = {
//   //--> OBJECT
//   name: "Dev Ed", //--> name = key;  "Dev Ed" = value;  name: "Dev Ed" = property
//   age: 25, //--> age = key;  25 = value;
//   subscribers: 200, //--> subscribers = key;   200 = value;
//   money: "lolnoo", //--> money = key;   "lolnoo" = value;
// };

// for (let x in user) {
//   console.log(user[x]);
// }

// console.log(user["subscribers"]);

//WHILE, DO WHILE

// let i = 20;

// while (i < 30) {
//   console.log(i);
//   i++;
// }

let i = 0;

// while (i > 30) {
//   console.log(i);
//   i += 2;
// }

do {
  console.log(i);
  i++;
} while (i > 10);
