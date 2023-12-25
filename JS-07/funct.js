// function declaration

// function sayHello(userName) {
//   console.log(`Hello, ${userName}`);
// }

// sayHello("Masha");
// sayHello("Vasya");
// sayHello("Pete");

// function calculateSum(a, b) {
//   console.log(a + b);
// }

// calculateSum(10, 5);
// // .....
// calculateSum(1555, 3925);

// function calculateSum(a, b) {
//   let sum = a + b;

//   return sum;
// }

// let sum1 = calculateSum(500, 2500);
// let sum2 = calculateSum(10, 15);

// let totalSum = calculateSum(sum1, sum2);

// console.log(totalSum);

// function sayHello(userName = "Guest") {
//   console.log(`Hello, ${userName}`);
// }

// sayHello("Masha");
// sayHello();

// function calcSum(a = 0, b = 0) {
//   return a + b;
// }

// console.log(calcSum(10, 10));
// console.log(calcSum(50, 35));

// function calcSum(...args) {
//   let sum = 0;

//   for (argument of args) {
//     sum += argument;
//   }

//   return sum;
// }

// console.log(calcSum(10, 10, 45, 5, 45, 80, 78));
// console.log(calcSum());

// function expression

// const calcSum = function (a, b) {
//   return a + b;
// };

// console.log(calcSum(45, 45));
// console.log(calcSum(200, 300));

// arrow functions

// const calcSum = (a, b) => a + b;

// console.log(calcSum(50, 90));

// const createObj = (userName, userEmail, userAge) => ({
//   userName: userName,
//   userEmail: userEmail,
//   userAge: userAge,
// });

// const masha = createObj("masha", "masha@masha.com", 45);

// console.log(masha);

const arr = [1, "", 2, 3, "", 5];

function clearArr(arr) {
  const cleanedArr = [];

  for (element of arr) {
    if (element) {
      cleanedArr.push(element);
    }
  }

  return cleanedArr;
}

const cleanArray = clearArr(arr);
console.log(cleanArray);
