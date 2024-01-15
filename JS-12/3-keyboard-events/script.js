const input = document.querySelector("#item-input");

// function onKeypress(e) {
//   console.log("Hello");
//   console.log(e);
// }

// function onKeyup(e) {
//   console.log("Bye");
//   console.log(e);
// }

// input.addEventListener("keypress", onKeypress);
// input.addEventListener("keyup", onKeypress);

const onKeyDown = (e) => {
  // console.log(e.keyCode);
  // console.log(e.shiftKey);
  // console.log(e.ctrlKey);
  console.log(e.altKey);

  // if (e.code === "Digit1") {
  //   console.log(1);
  // }
};

input.addEventListener("keydown", onKeyDown);
