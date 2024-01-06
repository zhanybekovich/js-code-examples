// Hing order functions - Функции высшего порядка

// foreach

// const socials = ["Twitter", "FB", "LinkedIn", "Instagram", "TikTok"];

// for (item of socials) {
//   console.log(item);
// }

// function printItems(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }

// printItems(socials);

// socials.forEach(function (item) {
//   console.log(item);
// });

// function printItems(item) {
//   console.log(item);
// }

// socials.forEach(printItems);

// socials.forEach((item) => console.log(item));

const socialObjects = [
  {
    name: "Twitter",
    url: "https://twitter.com",
  },
  {
    name: "FB",
    url: "https://fb.com",
  },
  {
    name: "TikTok",
    url: "https://tiktok.com",
  },
];

socialObjects.forEach((item) => console.log(`${item.name}: ${item.url}`));
