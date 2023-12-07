// Примитивы
/*
  - строка  string str
  - числа number:
    - целые integer (int): 5, 0, -2 (-2^53)
    - числа с плавающей точкой float: 52.654654, -2.3
  - bigInt (big Integer)
  - boolean
  - null -> пустота
  - undefined -> не определено
  - symbol

*/

// Ссылочные типы данных (Составные)
/*

 - Массивы
 - Объект
 - Функция

*/

// string

// let user = 'Маша друг \"Медведя\"';
// user = 'Медведь \' "   "';
// let age = 30;
// let user = `Мирлан  ${age}`;
// console.log(user);
// document.write(user);

// numbers

// let a = 100;
// let b = 200;
// console.log(a)
// console.log(a + b)

// let c = 5.256546549879546516164987695465;
// console.log(c)

// let d = "100";
// console.log(d)

// let bigNumber = 654654654321654987987654654654n;
// console.log(bigNumber)

// Операторы
// арифметика
// let x = 500;
// let y = 200

// let summa = x + y
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x * y);

// console.log(summa)

// console.log((5 + 2) * 3 / 2)


// boolean
// let isMarried = true;
// let hasFriend = false;


// // null
// let friends = null;
// friends = "Masha";
// console.log(friends);

// // undefined
// let hasCar;
// console.log(hasCar)

// // symbol
// const id = Symbol("id")
// console.log(id)

// операторы сравнения
// let x = 10;
// let y = "10";
// console.log(x > y)
// console.log(x < y)
// console.log(x >= y)
// console.log(x <= y)
// console.log(x !== y)
// console.log(x == y)
// console.log(x === y)

// increment
// let z = 1;
// z++;
// z++;
// console.log(z++);
// console.log(z)
// console.log(++z);

// decrement
// console.log(z--);
// console.log(z)
// console.log(--z);

// let a = 10;
// console.log(a)

// // a = a + 20;
// a += 20;
// a -= 5;
// a *= 2;
// a /= 2;
// a **= 4;
// console.log(a)

// let userName = prompt("Сенин атын ким?", "Гость");
// alert(`Привет, ${userName}`)

let a = prompt("Введите первое число: ");
let b = prompt("Введите второе число: ");

let summa = parseInt(a) + parseInt(b)


console.log(`Сумма a + b = ${summa}`)
