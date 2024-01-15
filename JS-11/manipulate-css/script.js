const p = document.querySelector("p");
const list = document.querySelector("ul");
const items = document.querySelector("li");

// p.className = "card hello";

// добавление класса
p.classList.add("box");
p.classList.add("big");

// удаление класса
// p.classList.remove("card");
// p.className = "box big";

// переключение класса
p.classList.toggle("hide");

// Замена класса
p.classList.replace("box", "big-box");
console.log(p.classList);
