// function sayHi() {
//   console.log(`hello there ${name}`);
//   changeName();
//   console.log(`sayHi is finished`);
// }

// function changeName() {
//   name = 'Bobby';
//   console.log(`we changed it to ${name}`);
//   console.log(`changeName is finished`);
// }
// let name = 'dev ed';

// sayHi();

// console.log(`We are done with the code`);

//=======KEYWORD THIS: is basically a pointer -> it refers to an object depending on different cases

// console.log(this); //it refers to Windows object
// function sayThis() {
//   console.log(this);
// }

// sayThis(); //this function refers also to Windows object

//keyword THIS become more usefull when creating objects

// const user = {
//   name: 'developedbyed',
//   //   sayHi() {
//   //     console.log(this.name);
//   //   },
// };

// const admin = {
//   name: 'admin',
// };

// function yell() {
//   console.log(this.name.toUpperCase());
// }

// user.yell = yell;
// admin.yell = yell;

// user.yell();
// admin.yell();

//using THIS with DOM

// const lists = document.querySelectorAll('li');

// lists.forEach((li) => {
//   li.addEventListener('click', function () {
//     console.log(this);
//   });
// });

// const user = {
//   name: 'developedbyed',
//   videos: ['html', 'css', 'js', 'react'],
//   greet() {
//     console.log(`Hello there ${this.name}`);
//     //Each called function gets her own THIS. Using arrow function, it's not happening like that
//     //Add function inside method (with arrow function)
//     this.videos.forEach((video) => {
//       console.log(this);
//     });
//   },
// };

// user.greet();

//===============BIND, CALL, APPLY=================
//===== BIND -> allows to call a method on a function
// const person = {
//   firstName: 'Ed ',
//   lastName: 'Developer',
//   getName() {
//     console.log(this.firstName + this.lastName);
//   },
// };

// function registerUser(country, lang) {
//   //aditional functionality
//   this.getName();
//   console.log(`My country is ${country} and my language is ${lang}`);
// }

// const register = registerUser.bind(person);
// register('Romania', 'română');

//===== CALL -> when using call, is not saved into a variable, just invoking it

// registerUser.call(person, 'Romanaia', 'en');

//APPLY- difefrence between call and apply is that it is writed with an array of arguments
// registerUser.apply(person, ['Romania', 'en']);

//======CONSTRUCTOR FUNCTION======is a function that will generate an object

// function toDo(name, completed) {
//   this.name = name;
//   this.completed = completed;
// }

// toDo.prototype.gettoDoName = function () {
//   console.log(this.name);
// };

// const todo = new toDo('Buy eggs', false); //the "new" keyoword in first, create new empty object
// const todo2 = new toDo('Do my homework', false);
// todo.gettoDoName();
// console.log(todo, todo2);

//======PROTOTYPE====== is a simple reference to another object that contains common properties and atributes across all instances
// function toDo(name, completed) {
//   this.name = name;
//   this.completed = completed;
// }

// toDo.prototype.gettoDoName = function () {
//   console.log(this.name);
// };

// const todo = new toDo('Buy eggs', false); //the "new" keyoword in first, create new empty object
// const todo2 = new toDo('Do my homework', false);
// todo.gettoDoName();
// console.log(todo, todo2);

//=====PROTOTYPAL INHERITANCE=====

// function Enemy(life, name, level) {
//   this.life = life;
//   this.name = name;
//   this.level = level;
// }

// Enemy.prototype.getInfo = function () {
//   console.log(this.life, this.name, this.level);
// };
// Enemy.prototype.attak = function () {
//   condole.log(`${this.name} has attaked!`);
// };
// Enemy.prototype.block = function () {
//   console.log(`${this.name} has blocked`);
// };

// function Dragon(life, name, level, color, spell) {
//   //Keyword THIS is going reference the Dragon object
//   Enemy.call(this, life, name, level);
//   //Define ti as normal
//   this.color = color;
//   this.spell = spell;
// }
// //INHERIT prototype
// Dragon.prototype = Object.create(Enemy.prototype);

// Dragon.prototype.fireBreath = function () {
//   console.log('FIRE BREATHHH!');
// };

// const newDragon = new Dragon(100, 'Dragon', 25, 'green', 'fire');

// newDragon.getInfo();

//======CLASSES======

// function Enemy(life, name, level) {
//   this.life = life;
//   this.name = name;
//   this.level = level;
// }

// Enemy.prototype.getInfo = function () {
//   console.log(this.life, this.name, this.level);
// };

// In place of that we writed above, we use classes:
// class Enemy {
//   constructor(life, name, level) {
//     this.life = life;
//     this.name = name;
//     this.level = level;
//   }
//   getInfo() {
//     console.log(this.life, this.name, this.level);
//   }
// }

// // const turtle = new Enemy(25, 'TMNT', 10);
// // const bug = new Enemy(1, 'Buggy', 1);
// // turtle.getInfo();
// // bug.getInfo();

// class Bug extends Enemy {
//   constructor(life, name, level, legs, dmg) {
//     super(life, name, level);
//     //
//     this.legs = legs;
//     this.dmg = dmg;
//   }
// }

// const jmk = new Bug(10, 'Buggy', 1, 6, 10);

// console.log(jmk);
// jmk.getInfo();

//======OOP(object oriented programming) ======
class Animator {
  constructor(selector) {
    this.selector = document.querySelector(selector);
  }
  fadeOut(time, toggle = false) {
    if (toggle && this.selector.classList.contains('fadeOut-active')) {
      this.selector.style.opacity = 1;
      this.selector.classList.remove('fadeOut-active');
    } else {
      this.selector.style.transition = `all ${time}s ease`;
      this.selector.style.opacity = 0;
      this.selector.classList.add('fadeOut-active');
    }
  }
  move(time, toggle = false, { x = 0, y = 0 }) {
    if (toggle && this.selector.classList.contains('move-active')) {
      this.selector.style.transform = 'translate(0px, 0px)';
      this.selector.classList.remove('move-active');
    } else {
      this.selector.style.transition = `all ${time}s ease`;
      this.selector.style.transform = `translate(${x}px, ${y}px)`;
      this.selector.classList.add('move-active');
    }
  }
}

const intro = new Animator('h2');
const btnAnim = new Animator('button');

const button = document.querySelector('button');

button.addEventListener('click', () => {
  intro.move(1, true, { x: 100, y: 200 });
  intro.fadeOut(2, true);
  btnAnim.move(2, true, { x: 500 });
});
