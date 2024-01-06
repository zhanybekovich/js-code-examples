// const parent = document.querySelector(".parent");

// console.log(parent.children[0].innerText);
// console.log(parent.children[0].className);
// console.log(parent.children[0].nodeName);

// parent.children[0].innerText = "Hello";
// // parent.children[0].className = "hide";
// parent.children[0].style.color = "blue";
// parent.children[0].style.fontSize = "32px";

// const secondItem = document.querySelector(".child:nth-child(2)");
// const result = secondItem.previousElementSibling;

// result.style.color = "yellow";
// console.log(secondItem.previousElementSibling);

// let output;

// // output = parent.childNodes[1].parentNode;
// output = parent.childNodes[1].parentElement;

// console.log(output);

// document.write("<h1>Hello</h1>");

// const h1 = document.createElement("h1");
// h1.className = "title";
// h1.innerText = "Hello World";
// h1.style.color = "blue";

// const root = document.getElementById("root");
// root.appendChild(h1);

// https://www.google.com/
// const root = document.getElementById("root");

// const a = document.createElement("a");
// a.className = "btn";
// a.setAttribute("href", "https://www.google.com/");

// const linkText = document.createTextNode("Google");
// a.appendChild(linkText);

// document.body.appendChild(a);

/* <li>
  Apples
  <button class="remove-item btn-link text-red">
    <i class="fa-solid fa-xmark"></i>
  </button>
</li>
 */

function createListItem(itemText) {
  const ul = document.getElementById("list");

  const li = document.createElement("li");
  li.innerText = itemText;

  const button = document.createElement("button");
  button.className = "remove-item btn-link text-red";
  // const button = createButton();

  const i = document.createElement("i");
  i.className = "fa-solid fa-xmark";
  i.innerText = "X";

  // const icon = createIcon();

  button.appendChild(i);

  li.appendChild(button);

  ul.appendChild(li);

  // return li;
}

const items = ["apples", "banana", "batteries", "butter", "john"];

items.forEach((item) => createListItem(item));
