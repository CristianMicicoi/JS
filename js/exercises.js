// to do:
// 1) a function that displays all the even/odd numbers up to a given number;
// 2) a function that displays all prime numbers up to a given number;
// 3) a function that displays the sum of two numbers;
// 4) a function that displays the numbers from an array;
// 5) a function that returns the sum of all elements in an array;
// 6) a function that shows the sum of all elements greater than a given number in an array.
// 7) search an array for the given number and display its index;

// 1)==================================================

// function even(myNumber) {
//   //   if (myNumber % 2 === 0) {
//   for (let i = 0; i <= myNumber; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
//   let i = 0;
//   while (i <= myNumber) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//     i++;
//   }
//   //   } else {
//   //     for (let i = 0; i <= myNumber; i++) {
//   //       if (i % 2 !== 0) {
//   //         console.log(i);
//   //       }
//   //     }
//   //   }
// }
// even(22);

//2)================================================

// function isPrime(num) {
//   let deimp = 2;

//   while (deimp < num / 2) {
//     if (num % deimp === 0) {
//       return false;
//     }
//     deimp++;
//   }
//   return true;
// }
// // isPrime(13);

// function showAllprimeNumbers(nrdat) {
//   let nrVerif = 2;
//   let counter = 0;
//   while (nrVerif <= nrdat) {
//     //verific daca nrVerif e prim
//     if (isPrime(nrVerif)) {
//       counter++;
//     }
//     nrVerif++;
//   }
//   console.log(counter);
// }

// let start = new Date().getTime();
// showAllprimeNumbers(10000);
// let end = new Date().getTime();

// console.log(end - start);

// 3) ===============================================

// function sum(a, b) {
//   return a + b;
// }

// console.log("suma este ", sum(2, 4));

//4) A function that displays the numbers from an array;

// function showArrays(narr) {
//   // let narr = [1, 2, 3, 4, 5];
//   for (let i = 0; i < narr.length; i++) {
//     console.log(narr[i]);
//   }
// }
// console.log(i);

// showArrays([1, 2, 3, 4, 5, 6]);

// 5) =====================================================

// function sumArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   console.log(sum);
// }

// sumArray([4, 7, 3, 5]);

// 6) =================================================

function greater(arr, abc) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > abc) {
      sum = sum + arr[i];
    }
  }
  console.log(sum);
}

greater([1, 2, 15, 19, 122], 20);

// 7) search an array for the given number and display its index;

function arrayIndex(list, search) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === search) {
      console.log(i);
    }
  }
}
arrayIndex([122, 134, 79, 18], 18);
