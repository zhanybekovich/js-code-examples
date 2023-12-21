// Object

// const john = {
//   name: "john",
//   age: 25,
//   hasCar: true,
//   friends: ["masha", "petya", "bob"],
//   address: {
//     city: "Bishkek",
//     country: "Kyrgyzstan",
//   },

//   sayName: function () {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
//   },
// };

// console.log(john.hasCar);
// console.log(john["name"]);
// console.log(john.friends[1]);
// console.log(john.address.country);

// john.sayName();

// const todo = new Object();
// todo.id = 1;
// todo.name = "Buy milk";
// todo.status = false;

// console.log(todo);

// todo.status = true;

// console.log(todo.status);

// const john = {
//   name: "john",
//   age: 25,
//   hasCar: true,
//   isMarried: false,
//   friends: ["masha", "petya", "bob"],
//   address: {
//     city: "Bishkek",
//     country: "Kyrgyzstan",
//   },
// };

// john.maritalStatus = true;
// console.log(Object.keys(john));
// console.log(Object.values(john));
// console.log(Object.entries(john));
// console.log(john.hasOwnProperty("isMarried"));

// const person = {
//   name: "john",
//   age: 25,
//   hasCar: true,
//   isMarried: false,
//   friends: ["masha", "petya", "bob"],
//   address: {
//     city: "Bishkek",
//     country: "Kyrgyzstan",
//   },
// };

// // const userName = person.name;

// const { name, age, hasCar, friends, address } = person;

// console.log(name, age, hasCar, friends[2], address.country);

// const fruits = ["apple", "banana", "orange"];
// // const first = fruits[0];
// // const second = fruits[1];
// const [a, b] = fruits;

// console.log(a, b);

// const numbers = [1, 2, 3, 50, 2, 45];

// const [a, b, ...others] = numbers;

// console.log(a);
// console.log(b);
// console.log(others);

// const numbers1 = [1, 2, 3];
// const numbers2 = [4, 5, 6];

// const allNumbers = [...numbers1, ...numbers2];
// console.log(allNumbers);

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 1, d: 2 };

// const obj3 = { ...obj1, ...obj2 };

// console.log(obj3);

// IF
// const password = "1234";

// if (password === "1234") {
//   console.log("Welcome!");
// } else {
//   console.log("Incorrect password!");
// }

// const d = new Date();

// const hour = d.getHours();

// console.log(hour);

// if (hour < 12) {
//   console.log("Good Morning!");
// } else if (hour < 18) {
//   console.log("Good Day!");
// } else {
//   console.log("Good Evening!");
// }

//  Logical operators
//   И &&
//  ИЛИ ||
// HE !

// console.log(100 > 20 && 30 > 15);
// console.log(10 > 20 || 30 > 15);
// console.log(!false);

// let a;

// a = "" || "abc" || 20;
// console.log(a);

// let c;
// c = 10 ?? 20;
// console.log(c);
// c = null ?? 20;
// console.log(c);

// ||=
let a = false;
// if (!a) {
//   a = 20;
// }
a ||= "111";

console.log(a);

// &&=
let b = 20;
// if (b) {
//   b = 10;
// }
b &&= 1000;

console.log(b);

// TRUTHY FALSY

/*

Falsy
 - false
 - 0
 - ""
 - null
 - undefined
 - NaN

*/

// const x = 0;

// if (x) {
//   console.log("Truthy");
// } else {
//   console.log("Falsy");
// }

// let y = null;
// console.log(y);

let money = 500;
let shop = false;

if (money >= 100 && shop === true) {
  console.log("Cola!");
} else {
  console.log("Not enough money or shop is closed!");
}
