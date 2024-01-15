// const ul = document.querySelector("ul");
// ul.innerHTML = "";

// const li2 = ul.querySelector("li:nth-child(2)");

// ul.removeChild(ul.querySelector("li:nth-child(2)"));

// console.log(li2);

// ul.remove();

// document.querySelector("ul").remove();

function removeListItem(item) {
  const ul = document.querySelector("ul");
  const li = ul.querySelector(`li:nth-child(${item})`);

  ul.removeChild(li);
}

// removeListItem(1);
// ...

// removeListItem(2);
