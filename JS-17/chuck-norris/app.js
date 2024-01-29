const jokeContainer = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");

function getJoke() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.chucknorris.io/jokes/random");

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);

      jokeContainer.innerHTML = `
      <h4>${data.value}</h4>
      <a href="${data.url}">Ссылка на шутку</a>
      `;
    } else {
      jokeContainer.innerText = "Что-то пошло не так, попробуйте позже!";
    }
  };

  xhr.send();
}

document.addEventListener("DOMContentLoaded", getJoke);
jokeBtn.addEventListener("click", getJoke);
