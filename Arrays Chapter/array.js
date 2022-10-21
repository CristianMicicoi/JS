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
// };

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

const newVideos = videos.map(function (video) {
  return video.toUpperCase();
});

// FIND
const searchTutorial = videos.find(function (video) {
  // function goes among eeach items and only return when the statement become true
  return video.includes('html basics');
});

// FILTER allow to return multiple values
const shortSearch = videos.filter(function (video) {
  return video.length < 10;
});

console.log(shortSearch);
