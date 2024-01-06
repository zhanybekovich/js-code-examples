// Ternary

// const age = 17;

// if (age >= 18) {
//   console.log("Adult");
// } else {
//   console.log("Baby");
// }

// age >= 18 ? console.log("Adult") : console.log("Baby");

// const age = 14;
// let canVote = false;

// age >= 18 ? (canVote = true) : (canVote = false);

// console.log(canVote);

// switch

// const d = new Date(2023, 3, 10, 8, 0, 0);
// const month = 2;
// const hour = 20;

// switch (month) {
//   case 1:
//     console.log("Jan");
//     break;

//   case 2:
//     console.log("Feb");
//     break;

//   case 3:
//     console.log("Mar");
//     break;

//   case 4:
//     console.log("Apr");
//     break;

//   default:
//     console.log("Invalid month");
// }

// switch (true) {
//   case hour < 12:
//     console.log("Morning");
//     break;

//   case hour < 18:
//     console.log("Day");
//     break;

//   default:
//     console.log("Night");
// }

// Loops

// const friends = ["Bob", "Vasya", "Masha", "John"];

// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// console.log(friends.length);

// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i]);
// }

// for (let i = 1; i <= 5; i++) {
//   console.log(`Внешний цикл ${i}`);

//   for (let j = 1; j <= 5; j++) {
//     console.log(`Внутренний цикл ${j}`);
//   }
// }

// break
// for (let i = 1; i <= 10; i++) {
//   if (i === 5) {
//     console.log("Stop!");
//     break;
//   } else {
//     console.log(i);
//   }
// }

// continue
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 1) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// for of
// const items = ["book", "table", "chair", "pencil"];

// for (const element of items) {
//   console.log(element);
// }

// const friends = ["Bob", "Vasya", "Masha", "John"];

// for (const friend of friends) {
//   console.log(friend);
// }

// for in
// const colorOjb = {
//   color1: "red",
//   color2: "orange",
//   color3: "blue",
// };

for (const key in colorOjb) {
  console.log(colorOjb[key]);
}

const friends = ["Bob", "Vasya", "Masha", "John"];

for (const index in friends) {
  console.log(friends[index]);
}
