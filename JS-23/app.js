// const circle = {
//   radius: 1,
//   position: {
//     x: 1,
//     y: 1,
//   },

//   draw() {
//     console.log("draw");
//   },
// };

// circle.draw();

// const circle2 = {
//   radius: 2,
//   position: {
//     x: 10,
//     y: 5,
//   },

//   draw() {
//     console.log("draw");
//   },
// };

// circle2.draw();

// OOP

// Factory function

// function CreateCirle(radius) {
//   return {
//     radius: radius,

//     draw() {
//       console.log(`Круг радиус ${this.radius} создан!`);
//     },
//   };
// }

// const circle = CreateCirle(1);
// circle.draw();

// const circle2 = CreateCirle(2);
// circle2.draw();

// const circle3 = CreateCirle(5);
// circle3.draw();

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log(`Круг радиусом ${this.radius} создан!`);
//   };
// }

// const circle = new Circle(1);
// circle.draw();

// const circle2 = new Circle(3);
// circle2.draw();

// const circle3 = new Circle(10);
// circle3.draw();

// class Circle {
//   constructor(radius, x, y) {
//     this.radius = radius;
//     this.x = x;
//     this.y = y;
//   }

//   draw() {
//     console.log(`Круг радиусом ${this.radius} создан!`);

//     console.log(`Координаты круга: ${this.x}, ${this.y}`);
//   }
// }

// const circle = new Circle(1, 10, 50);
// circle.draw();
// console.log(circle.x, circle.y);

// const circle2 = new Circle(20, 40, 90);
// circle2.draw();

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayName() {
//     document.write(`Hello, my name is ${this.name}<br>`);
//   }

//   sayAge() {
//     document.write(`I am ${this.age} <br>`);
//   }
// }

// const john = new User("John", 25);
// john.sayName();

// const masha = new User("Masha", 20);
// masha.sayName();
// masha.sayAge();

// class Admin extends User {
//   constructor(name, age, permission) {
//     super(name, age);

//     this.permission = permission;
//   }

//   sayPermission() {
//     document.write(`I am ${this.permission} <br>`);
//   }

//   // sayName() {
//   //   document.write(
//   //     `Hi, I am ${this.name}, and I am ${this.permission} of this company<br>`
//   //   );
//   // }

//   sayName() {
//     super.sayName();
//     document.write(`I am ${this.permission} of this company<br>`);
//   }
// }

// const vasya = new Admin("Vasya", 30, "admin");
// vasya.sayName();
// vasya.sayAge();
// vasya.sayPermission();

class User {
  _money = 0;

  get money() {
    return this._money;
  }

  set money(summ) {
    if (summ < 0) {
      throw new Error("Сумма не может быть отрицательной");
    }

    this._money = summ;
  }
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// const user = new User("John", 25);
// console.log(user.name);
// user.name = "Вася";
// console.log(user.name);

const user = new User("John", 25);
// user.money = 100;
console.log(user.money);

user.money = 500;
console.log(user.money);

user.money = -200;
console.log(user.money);

// import export
// closure замыкание
// Webpack, Vite
