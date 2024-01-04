const numbers = [1, 2, 3, 4, 5];

// let sum = 0;

// for (number of numbers) {
//   sum += number;
// }

// console.log(sum);  0 + 1 = 1 + 2 = 3 + 3 = 6 ... = 15

// const summa = numbers.reduce(function (accumulator, current) {
//   return (accumulator += current);
// }, 0);

// console.log(summa);

const cart = [
  { id: 1, name: "TV", price: 100 },
  { id: 2, name: "Phone", price: 250 },
  { id: 3, name: "Laptop", price: 500 },
];

const total = cart.reduce((acc, item) => {
  return acc + item.price;
}, 0);

console.log(total);
