const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = [];

// for (number of numbers) {
//   squaredNumbers.push(number * 2);
// }

// console.log(squaredNumbers);

// numbers.map(function (number) {
//   squaredNumbers.push(number * 2);
// });

// console.log(squaredNumbers);

// function calcSqure(n) {
//   return n * 3;
// }

// const sqNumbers = numbers.map(calcSqure);
// console.log(sqNumbers);

const companies = [
  {
    name: "C 1",
    city: "Bishkek",
  },
  {
    name: "C 2",
    city: "Osh",
  },
  {
    name: "C 3",
    city: "Karakol",
  },
];

const companyNames = companies.map((company) => {
  return `<h2>${company.name}</h2>`;
});

companyNames.forEach((item) => document.write(item));
