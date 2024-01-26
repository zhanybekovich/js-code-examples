/*
- GET -> получение данных
- POST -> отправка данных
- PUT, PATCH -> обновление данных
- DELETE -> удаление данных


- AJAX -> XMLHttpRequest - XHR
- FETCH API
- AXIOS

- 100 -> Продолжай
- 200 -> Удачно ОК
- 300 -> Redirect перенаправление
- 400 -> Client Error - ошибки на стороне клиента
- 500 -> Server Error - ошибки на стороне сервера
*/

// JSON
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.github.com/users/zhanybekovich/repos");

/*
0: not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready
*/

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.responseText);

    data.forEach((movie) => {
      const li = document.createElement("li");
      li.innerHTML = `${movie.title} - ${movie.year}`;

      document.getElementById("results").appendChild(li);
    });
  }
};

xhr.send();
