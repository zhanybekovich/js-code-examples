// FETCH API

// JSON
// fetch("./movies.json")
//   .then((response) => {
//     // console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     // console.log(data);

//     data.forEach((movie) => {
//       document.getElementById("results").innerHTML += `
//       <li class="movie">${movie.title}</li>
//       `;
//     });
//   });

//FETCH with endpoint
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    // console.log(response);

    return response.json();
  })
  .then((data) => {
    console.log(data);
    data.forEach((user) => {
      document.getElementById("results").innerHTML += `
            <li>
              <div>
                <h3>${user.name}</h3>
                <p>${user.address.city}</p>
                <p>${user.email}</p>
              </div>
            </li>
            `;
    });
  });
