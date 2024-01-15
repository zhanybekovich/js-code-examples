// const listItems = document.querySelectorAll("li");

// listItems.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     // console.log(e.target);
//     e.target.remove();
//   });
// });

const ul = document.querySelector("ul");

ul.addEventListener("click", (e) => {
  // console.log(e.target);

  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});
