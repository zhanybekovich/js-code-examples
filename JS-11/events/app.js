// console.dir(document.querySelector("h1"));

// function changeColor() {
//   const h1 = document.querySelector("h1");
//   h1.style.color = "Blue";
// }

// const h1 = document.querySelector("h1");

// h1.addEventListener("click", function () {
//   h1.style.backgroundColor = "yellow";
// });

// function onClick() {
//   h1.style.backgroundColor = "yellow";
// }

// function onMouseEnter() {
//   h1.style.backgroundColor = "red";
// }

// function hello() {
//   h1.style.backgroundColor = "black";
//   h1.style.color = "white";
// }

// h1.addEventListener("click", onClick);
// h1.addEventListener("mouseenter", onMouseEnter);
// h1.addEventListener("mouseleave", hello);

// ================

// const btn = document.querySelector("button");
// const h1 = document.querySelector("h1");

// function changeClass() {
//   // h1.classList.toggle("box");
//   // h1.classList.add("box");
//   h1.classList.remove("box");
// }

// btn.addEventListener("click", changeClass);

// ============

const items = document.querySelectorAll("li");
// console.log(items);

function changeBG(li) {
  this.style.backgroundColor = "yellow";
  console.log(li);
}

items.forEach((li) => {
  li.addEventListener("click", changeBG);
});
