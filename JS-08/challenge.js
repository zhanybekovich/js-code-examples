// const users = [
//   {
//     firstName: "John",
//     lastName: "Johny",
//     age: 30,
//   },
//   {
//     firstName: "Pete",
//     lastName: "Johny",
//     age: 45,
//   },
//   {
//     firstName: "Vasya",
//     lastName: "Johny",
//     age: 14,
//   },
//   {
//     firstName: "Masha",
//     lastName: "Johny",
//     age: 20,
//   },
//   {
//     firstName: "Mary",
//     lastName: "Johny",
//     age: 26,
//   },
// ];

// users
//   .filter((user) => user.age >= 25)
//   .map((user) => ({
//     name: user.firstName,
//   }))
//   .forEach((user) => console.log(user.name));

const numbers = [1, 2, 3, 4, 5];

// const sqN = [];

// for (number of numbers) {
//   sqN.push(number * 2);
// }

// console.log(sqN);

// const sqN = numbers.map((number) => number * 2);

// console.log(sqN);

const users = ["masha", "petya", "vasya"];

users.forEach((user, idx) => console.log(`${user} -> ${idx}`));
