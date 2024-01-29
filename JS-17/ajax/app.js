const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.github.com/users/zhanybekovich/repos");

xhr.onreadystatechange = function () {
  // console.log(this.readyState);
  // console.log(this.status);

  if (this.readyState === 4 && this.status === 200) {
    // console.log(JSON.parse(this.responseText));

    const data = JSON.parse(this.responseText);

    data.forEach((repository) => {
      const li = document.createElement("li");

      li.innerHTML = `${repository.name} - ${repository.description}`;

      document.querySelector("#results").appendChild(li);
    });
  }
};

xhr.send();
