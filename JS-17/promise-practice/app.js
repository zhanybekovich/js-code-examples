const posts = [
  {
    title: "Post 1",
    body: "This is post 1",
  },
  {
    title: "Post 2",
    body: "This is post 2",
  },
];

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = true;

      if (!error) {
        posts.push(post);

        resolve();
      } else {
        reject("Не удалось отправить пост!");
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(() => {
    posts.forEach((post) => {
      const div = document.createElement("div");
      div.innerHTML = `<p>${post.title} - ${post.body}</p>`;

      document.querySelector("#posts").appendChild(div);
    });
  }, 1000);
}

createPost({ title: "Post 3", body: "This is post 3" })
  .then(getPosts)
  .catch((error) => {
    const h3 = document.createElement("h3");

    h3.innerText = `${error}`;

    document.getElementById("posts").appendChild(h3);
  });
