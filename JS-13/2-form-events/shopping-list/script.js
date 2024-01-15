const form = document.getElementById("item-form");

// function onSubmit(e) {
//   // console.log("Form is submitted");

//   e.preventDefault();
//   // console.log("Prevented submit event");

//   const itemInput = document.getElementById("item-input").value;
//   const select = document.getElementById("priority-input").value;

//   if (itemInput === "" || select === "0") {
//     // console.log("Please fill in all fields!");
//     alert("Заполните все поля!");
//   } else {
//     return;
//   }
// }

function onSubmit(e) {
  e.preventDefault();

  // const formData = new FormData(form);

  // const entries = formData.entries();

  // // console.log(entries);

  // for (let entry of entries) {
  //   // console.log(entry);
  //   console.log(entry[1]);
  // }

  const formData = new FormData(form);
  const item = formData.get("item");
  const priority = formData.get("priority");

  console.log(item, priority);
}

form.addEventListener("submit", onSubmit);
