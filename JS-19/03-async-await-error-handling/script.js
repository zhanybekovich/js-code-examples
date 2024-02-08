const getUsers = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/userss");

    if (!res.ok) {
      throw new Error("Не удалось загрузить пользователей!... ");
    }

    const users = await res.json();

    users.forEach((user) => {
      document.write(user.name);
    });

    // const res = await fetch("http://httpstat.us/404");

    // if (!res.ok) {
    //   throw new Error("Request failed");
    // }

    // const data = await res.text();

    // console.log(data);
  } catch (err) {
    document.write(err);
  }
};

getUsers();
