// ARRAY=============================================
// The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
// Description:
// In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:
// -JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
// -JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
// -JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
// -JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
// Constructor:
// Array() -> creates a new Array object.

// THE usage of "let" and "const"
// let bank = 250;

// bank = 100;

// console.log(bank);

// let bank = 250;
// let newBank = bank;

// newBank = 500;

// console.log(bank, newBank);

// OBJECTS AND ARRAYS REFERENCE TYPES - when do modificte a variable, always is gonna check and modify the original variable/const

// const names = ['Ed', 'Bubzy', 'John'];

// const newNames = names;

// newNames.push('MC');

// console.log(newNames);

// console.log(names);

// const tweet = {
//   name: 'DeveloperEd',
//   tweets: 20,
//   age: 26,
// }

// const newTweet = tweet;
// newTweet.tweets = 21;

// console.log(tweet);

// Callbacks, higher order functions
//CALLBACK function
// const videos = [
//   'Pranking my sister, is she ok(gone wrong)',
//   'how to javascript',
//   'html tutorial',
//   'learning the piano',
// ];

//FOREACH wich just loops array elements and allows to change some functionality but doesn't return a value that can be saved on variable
// videos.forEach(function (video) {
//   console.log('run');
//   console.log(video);
// });

// button.addEventListener('click', function() {

// })

//MAP allow to run an array function and make some changes in it, return a value and save it to the console.log variable
// if I wand to modify/copy and modify an array I would use MAP
// const newVideos = videos.map(function (video) {
//   return video.toUpperCase();
// });

// newVideos.push('HEYYYY');

// console.log(videos);

// console.log(newVideos);

//HIGHER ORDER function that repeat another function three times

// function repeater(fn) {
//   fn();
//   fn();
//   fn();
// }

// function sayHello() {
//   console.log('Hello There!');
// }

// repeater(sayHello);

// I can also write the function above like this:

// repeater(function () {
//   console.log('Hello There!');
// });

// videos.forEach(function (video) {
//   console.log('run');
//   console.log(video);
// });

const videos = [
  'Pranking my sister, is she ok(gone wrong)',
  'how to javascript',
  'html tutorial',
  'learning the piano',
  'html basics',
  'css',
  'java',
  'programming',
  'UI/UX',
];

const games = [
  { title: 'Mass Effect', rating: 9.5 },
  { title: 'League Of Legends', rating: 5 },
  { title: 'Last of Us', rating: 10 },
  { title: 'God of war', rating: 10 },
  { title: 'WWE 2k20', rating: 4 },
];

//Ternary operator
// const newVideos = videos.map(function (video) {
// if (video.length < 10) {
//   return video;
// } else {
//   return 'nope';
// }
// in place of the if above we can write:
//   return video.length < 10 ? video : 'nope';
// });

// console.log(newVideos);

// FIND
const searchTutorial = videos.find(function (video) {
  // function goes among each items and only return when the statement become true
  return video.includes('html basics');
});

// FILTER allow to return multiple values
const shortSearch = videos.filter(function (video) {
  return video.length < 10;
});

const highRating = games.filter(function (game) {
  return game.rating > 9;
});

// console.log(highRating);

//SOME and EVERY

//Every
const checkRating = games.every(function (game) {
  return game.rating > 8;
});

// console.log(checkRating);

//Some
const someRating = games.some(function (game) {
  return game.rating > 8;
});

// console.log(someRating);

//ARROW FUNCTIONS
//Arrow functions allow us to write shorter and cleaner function syntax

//How we used to do it
const newVideos = videos.map(function (video) {
  return video.length < 10 ? video : 'nope';
});

//how we do simplified
// const arrowVideos = videos.map((video) => (video.length < 10 ? video : 'nope'));

const arrowVideos = videos.map((video) => video.toUpperCase());

// console.log(arrowVideos);

//SORT
const items = ['Banana', 'Orange', 'Apple', 'Mango'];
const ratings = [98, 56, 4, 2, 22, 45.6, 10, 80];

// items.sort();
// console.log(items);

//array of numbers doesn't arrange ascendent with SORT
//return is negative if a is sorted before b
//positive if b is sorted efore a
//if they are the same is 0, nothing changes
// ratings.sort((a, b) => a - b); //ascending
// // return b - a; //descending

// console.log(ratings);

// games.sort((a, b) => a.rating - b.rating);

// console.log(games);

//Creating copies- Spread operator ==========

// const gamesDesc = [...games];

// gamesDesc[0].rating = 0;

//spread operator '...'

// const descRating = [...ratings];
// descRating.sort((a, b) => b - a);
// console.log(descRating);
// console.log(ratings);

//Concatenate multiple arrays
// const name = 'developedbyed';

// const letters = name.split('');

// console.log(letters);

let dailyActivities = ['eat', 'exercise', 'work', 'sleep'];
let start = -2; //index number where we want to start from
let deleteCount = 2; // the number of elements we want to delete
dailyActivities.splice(start, deleteCount, 'walk', 'help');
console.log(dailyActivities);

// const time = new Date().getHours();
// let greeting;
// if (time < 10) {
//   greeting = 'Good morning!';
// } else if (time < 20) {
//   greeting = 'Good day!';
// } else {
//   greeting = 'Good evening!';
// }
// console.log(greeting);

//3 modes of display the index of the array
// let array = ['a', 'b', 'c', 'def', 'test'];

// for (let i = 0; i < array.length; i++) {
//   console.log(`${array[i]} -> ${i}`);
// }

// array.forEach(function (value, index) {
//   console.log(`${value} -> ${index}`);
// });

// let i = 0;
// while (i < array.length) {
//   console.log(`${array[i]} -> ${i}`);
//   i++;
// }

//sort the array ascending
// let arrayNr = [4, 9, 1, 10, 5];

// arrayNr.sort(function (a, b) {
//   return a - b;
// });
// console.log(arrayNr);

//search and display the name of the element with id=5, using for, for each, find
// let arr = [
//   { id: 1, name: 'Cristi' },
//   { id: 2, name: 'Ema' },
//   { id: 5, name: 'Beni' },
//   { id: 6, name: 'Dani' },
// ];

//using FIND
// console.log(arr.find((person) => person.id === 5).name);

//using FOR
// for (let i = 0; i == arr.length; i++) {
//   if (arr[i].id == 5) {
//     console.log(arr);
//   }
// }

//USING forEach
// arr.forEach(function (name) {
//   console.log((name = 'Beni'));
// });
