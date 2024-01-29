// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async задача выполнена!");
//     resolve({ name: "John" });
//   }, 1000);
// });

// promise.then((user) => {
//   document.write(user.name);
// });

// console.log("hello");

// ================

const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;

    if (!error) {
      resolve({ name: "John" });
    } else {
      reject("Error: Не удалось загрузить данные пользователя!");
    }
  }, 1000);
});

getUser
  .then((user) => document.write(user.name))
  .catch((error) => document.write(error))
  .finally(() => document.write("Промис выполнен или нет"));
