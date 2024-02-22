// Замыкание Closure

// function outerFunction() {
//   let outerVariable = "Внешняя переменная";

//   function innerFunction() {
//     console.log(outerVariable);
//   }

//   return innerFunction;
// }

// const closureExample = outerFunction();

// closureExample();

// function createCounter() {
//   let count = 0;

//   return function () {
//     return ++count;
//   };
// }

// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// function createUniqueIdGenerator() {
//   let id = 0;

//   return function () {
//     return `id_${++id}`;
//   };
// }

// const generateID = createUniqueIdGenerator();
// console.log(generateID());
// console.log(generateID());
// console.log(generateID());
// console.log(generateID());
// console.log(generateID());

// function createExpensiveOperation() {
//   let cache = {};

//   return function (arg) {
//     if (arg in cache) {
//       console.log(`From cache`);
//       return cache[arg];
//     } else {
//       console.log("Calculating....");
//       const result = `Calculated result: ${arg}`;

//       cache[arg] = result;

//       return result;
//     }
//   };
// }

// const performOperation = createExpensiveOperation();

// console.log(performOperation(5));
// console.log(performOperation(5));
// console.log(performOperation(45));
// console.log(performOperation(45));

import { add, multiple } from "./math.js";

const result1 = add(2, 2);

const product = multiple(5, 5);

console.log(result1);
console.log(product);
