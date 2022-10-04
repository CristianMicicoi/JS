// console.warn("codul a fost executat");
// console.error("codul a fost executat");

// console.log("codul a fost executat");

//declarare variabila in JS: let, var, const

// console.log();

// var myName = "alien";
// let secondName = "Mihai";
// const age = 30;

// Data-types - primitive si obiecte

//Primitive
//boolean(true or false)
let boolean = false;

// null
let n = null;

// undefined
let undf = undefined;

// number
let num = 123;

// string
let str = "This is a string";

console.log(boolean);
console.log(typeof str);

//Obiect
let person1 = {
  age: 20,
  name: "Mihai",
};

let person2 = {
  age: 30,
  name: "Bogdan",
};

console.log(person1);

// Array
const hobbies = ["Reading", "Biking", "Swimming"];
const prices = [12.5, 13.2, 11.3, 25.7];

// console.log(price);
const price = prices[3];

console.log(price);

const persons = [person1, person2];
const peoplep = [
  { id: 1, age: 35, email: "person@email.com" },
  { id: 2, age: 25, email: "otherperson@email.com" },
];

console.log(peoplep);

// Operatori

// 1. Aritmetici +, -, *, /, ++ si -- de incrementare

const sum = 1 + 1;
console.log(sum);

const difference = 2 - 1;
console.log(difference);

const multiplication = 10 * 5;
console.log(multiplication);

let division = 10 / 5;
console.log(division);

division++;
console.log(division);

division--;
console.log(division);

// 2. Logici &&(și),  ||(ori), !(negație)

// 3. Comparatie  ==, !=, ===(pe langa == verifica si tipul datei(varianilei)introduse), !==, >=, <=, <, >

const number1 = 12;
const number2 = 12;

console.log(number1 == number2);
console.log(number1 != number2);

const myNumber = "12";

console.log(number1 !== myNumber);

console.log(number1 > number2);
console.log(number1 <= number2);

// 4. De atribuire  =, +=(addition-asignment), *=, /=, -=

const myName = "Bogdan";
let mySecondNumber = 20;
console.log("My number: " + mySecondNumber);
mySecondNumber += 5;
console.log("My number: " + mySecondNumber);

// Control Flow Statements (curs de executie al codului)

const age = 18;

// if/else
if (age < 18) {
  console.log("You are under age.");
} else {
  console.log("You are an adult.");
}

// for loop
const people = ["Bogdan", "Mihai", "Andreea", "Ovidiu"];

for (i = people.length - 1; i >= 0; i--) {
  console.log(people[i]);
}

// let number = 1;

// while (number <= 10) {
//   console.log(number);
//   number++;
// }

// let number = 1;

// do {
//   console.log(number);
//   number++;
// } while (number <= 10);

// let number = 5;

// switch (number) {
//   case 1:
//     console.log("Number este 1");
//     break;
//   case 2:
//     console.log("Number este 2");
//     break;
//   default:
//     console.log("Number este de fapt:" + number);
// }

// Tratarea erorilor - prinderea erorilor

// try {
//   if (number === 1) {
//     console.log("number are valoarea 1");
//   }
// } catch (error) {
//   console.log("Something happened: " + error.message);
// } finally {
//   console.log("Finally a fost executat.");
// }

// Functii

function displayPersonDetails(myName, age, email) {
  console.log("My name is: " + myName);
  console.log("My age is: " + age);
  console.log("My email adress is: " + email);
}

// displayPersonDetails("Ovidiu", 20, "test@test.com");

function function1(callback) {
  console.log("Processing...");
  callback();
}

// function1(function () {
//   //functie anonima!! nu are parametrii, niciun nume, a fost declarata direct inline pentru argumentul function1
//   console.log("Functia a fost executata");
// });

//arrow function(self-executing, punand inca un rand de paranteze rotunde la inceput/final, si se face call functiei, deoarece nu are nume)
function1(() => console.log("Functia a fost executata"));

((myName) => {
  console.log(myName);
})();

// Clase si obiecte
// o clasa nu este hoisted, nu beneficiaza de hoisting
// var secondPerson = new Person("Ion", "Mihailescu", new Date("05-06-1991"));

// class Person {
//   // campurile de definire a proiectului de mai jos le putem face private prin folosirea "#"
//   #firstName;
//   #lastName;
//   #dateOfBirth;
//   constructor(firstName, lastName, dateOfBirth) {
//     this.#firstName = firstName;
//     this.#lastName = lastName;
//     this.#dateOfBirth = dateOfBirth;
//   }

//   calculateAge() {
//     return new Date().getFullYear() - this.#dateOfBirth.getFullYear();
//   }
// }

// // folosind hoisting, JS muta toate aceste declarari la nivelul de sus al executiei codului si stie despre "p" inainte ca sa il declaram si initializam
// var p = new Person("Mihai", "Popescu", new Date("11-12-1988"));
// // cand incercam sa citim datele din obiectul de mai sus nu mai avem nu mai avem campurile disponibile
// console.log(p.calculateAge());

class Person {
  //constructor este metoda cu care se construieste obiectul, este primul care se executa si initializeaza valorile date ca argument
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  calculateAge() {
    return new Date().getFullYear() - this.dateOfBirth.getFullYear();
  }
}

var p = new Person("Mihai", "Popescu", new Date("11-12-1988"));
console.log(p.dateOfBirth);

// manipulare DOM(document- object- model) sau suma tuturor elementelor HTML
//de ex, pentru selectarea tagului h1 din html:

//daca avem mai multe taguri h1, cel mai bine e sa selectam elementul sau elementele dupa clasa sau id
// var h1 = document.querySelector("#subtitle");
// //selecteaza doar primul element cu clasa sau id-ul dat
// console.log(h1.outerHTML);

//pentru a selecta toate elementele cu clasa sau id-ul dat:
var query = document.querySelectorAll(".page__subtitle");
console.log(query);
