const itemInput = document.getElementById("item-input");
const h1 = document.querySelector("h1");

// function onIput(e) {
//   // console.dir(e.target);
//   // console.log(e.target.value);
//   h1.textContent = e.target.value;
// }
// // itemInput.addEventListener("keypress", onIput);
// itemInput.addEventListener("input", onIput);

// function onIput(e) {
//   h1.textContent = e.target.value;
// }
// const selectOption = document.getElementById("priority-input");
// // selectOption.addEventListener("change", onIput);
// selectOption.addEventListener("input", onIput);

// function onInput(e) {
//   // h1.textContent = e.target.value;
//   // h1.textContent = e.target.checked;
//   console.dir(e.target);
// }
// const checkBox = document.getElementById("checkbox");
// checkBox.addEventListener("input", onInput);

function onfocus(e) {
  // console.log("Focused");
  // console.log(e.target);

  e.target.style.backgroundColor = "green";
}

function onBlur(e) {
  e.target.style.backgroundColor = "white";
}

itemInput.addEventListener("focus", onfocus);
itemInput.addEventListener("blur", onBlur);
