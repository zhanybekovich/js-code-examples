const button = document.querySelector("form button");
const div = document.querySelector(".form-div");
const form = document.getElementById("item-form");

// button.addEventListener("click", () => {
//   // console.log("button clicked");
//   alert("button clicked");
// });

// div.addEventListener("click", () => {
//   alert("div clicked");
// });

// form.addEventListener("click", () => {
//   alert("form clicked");
// });

button.addEventListener("click", (e) => {
  // console.log("button clicked");
  alert("button clicked");

  e.stopPropagation();
});

div.addEventListener("click", () => {
  alert("div clicked");
});

form.addEventListener("click", () => {
  alert("form clicked");
});
