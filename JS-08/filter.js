const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 100, 12, 45];
// const evenNumbers = [];

// for (number of numbers) {
//   if (number % 2 === 0) {
//     evenNumbers.push(numbers);
//   }
// }

// console.log(evenNumbers);

// numbers.filter(function (number) {
//   if (number % 2 === 0) {
//     console.log(number);
//   }
// });

// function getEven(number) {
//   if (number % 2 === 0) {
//     return number;
//   }
// }

// const evens = numbers.filter(getEven);
// console.log(evens);

// const evens = numbers.filter((number) => number % 2 === 0);
// console.log(evens);

const friends = ["Bob", "Masha", "Azamat", "Akylai", "Pete", "John"];

const friendsA = friends.filter((userName) => {
  if (userName[0] === "A") return userName;
});

console.log(friendsA);
