// console.log("Loading...");
// console.log("DOM");
// console.log("DOM 2");

// setTimeout(function () {
//   console.log("Загрузил!");
// }, 3000);

// console.log("DOM");
// console.log("DOM 2");

// function changeText() {
//   document.querySelector("h1").textContent = "Hello World!";
// }

// setTimeout(changeText, 2000);

// =======================

// function myFunction(a) {
//   console.log(a, Date.now());
// }

// const intervalID = setInterval(myFunction, 2000, "hello");

// function stop() {
//   clearInterval(intervalID);
// }

// document.getElementById("cancel").addEventListener("click", stop);

let intervalID;

function changeRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  document.body.style.backgroundColor = `#${randomColor}`;
}

function startChange() {
  if (!intervalID) {
    intervalID = setInterval(changeRandomColor, 1000);
  }
}

function stopChange() {
  clearInterval(intervalID);
}

document.getElementById("start").addEventListener("click", startChange);
document.getElementById("stop").addEventListener("click", stopChange);

document.querySelector("h1").addEventListener("click", function (e) {
  e.target.classList.add("animate");
});
