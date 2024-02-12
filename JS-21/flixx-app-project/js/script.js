const global = {
  currentPage: window.location.pathname,
};

// Init APP
function init() {
  switch (global.currentPage) {
    case "/":
    case "/index.html":
      displayPopularMovies();
      break;
    case "/shows.html":
      displayPopularTVShows();
      break;
    case "/movie-details.html":
      displayMovieDetails();
      break;
    case "/tv-details.html":
      displayShowDetails();
      break;
    case "/search.html":
      console.log("Search");
      break;
  }

  highlightActiveLink();
}

// Display show details
async function displayShowDetails() {
  const showID = window.location.search.split("=")[1];

  const show = await fetchAPIData(`tv/${showID}`);

  const div = document.createElement("div");

  div.innerHTML = `
  <div class="details-top">
  <div>
    <img
      src="images/no-image.jpg"
      class="card-img-top"
      alt="${show.name}"
    />
  </div>
  <div>
    <h2>${show.name}</h2>
    <p>
      <i class="fas fa-star text-primary"></i>
      ${show.vote_average.toFixed(1)} / 10
    </p>
    <p class="text-muted">Release Date: ${show.last_air_date}</p>
    <p>
     ${show.overview}
    </p>
    <h5>Genres</h5>
    <ul class="list-group">
      ${show.genres.map((genre) => `<li>${genre.name}</li>`).join("")}
    </ul>
    <a href="${
      show.homepage
    }" target="_blank" class="btn">Visit Show Homepage</a>
  </div>
</div>
<div class="details-bottom">
  <h2>Show Info</h2>
  <ul>
    <li><span class="text-secondary">Number Of Episodes:</span> ${
      show.number_of_episodes
    }</li>
    <li>
      <span class="text-secondary">Last Episode To Air:</span> ${
        show.last_episode_to_air.name
      }
    </li>
    <li><span class="text-secondary">Status:</span> ${show.status}</li>
  </ul>
  <h4>Production Companies</h4>
  <div class="list-group">${show.production_companies
    .map((company) => `<span>${company.name}</span>`)
    .join("")}</div>
  `;

  document.querySelector("#show-details").appendChild(div);
}

// Display movie details
async function displayMovieDetails() {
  const movieID = window.location.search.split("=")[1];

  const movie = await fetchAPIData(`movie/${movieID}`);

  console.log(movie);

  const div = document.createElement("div");

  div.innerHTML = `
  <div class="details-top">
    <div>
      <img
        src="images/no-image.jpg"
        class="card-img-top"
        alt="${movie.title}"
      />
    </div>

    <div>
      <h2>${movie.title}</h2>
      <p>
        <i class="fas fa-star text-primary"></i>
        ${movie.vote_average.toFixed(1)} / 10
      </p>
      <p class="text-muted">Release Date: ${movie.release_date}</p>
      <p>
        ${movie.overview}
      </p>
      <h5>Genres</h5>
      <ul class="list-group">
      ${movie.genres.map((genre) => `<li>${genre.name}</li>`).join("")}
      </ul>
      <a href="${
        movie.homepage
      }" target="_blank" class="btn">Visit Movie Homepage</a>
    </div>

    <div class="details-bottom">
      <h2>Movie Info</h2>
      <ul>
        <li><span class="text-secondary">Budget:</span> $${addCommasTonumber(
          movie.budget
        )}</li>
        <li><span class="text-secondary">Revenue:</span> $${addCommasTonumber(
          movie.revenue
        )}</li>
        <li><span class="text-secondary">Runtime:</span> ${
          movie.runtime
        } minutes</li>
        <li><span class="text-secondary">Status:</span> ${movie.status}</li>
      </ul>
      <h4>Production Companies</h4>
      <div class="list-group">${movie.production_companies
        .map((company) => `<span>${company.name}</span>`)
        .join("")}</div>
    </div>
  `;

  document.querySelector("#movie-details").appendChild(div);
}

// Function add commas to number
function addCommasTonumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Show spinner function
function showSpinner() {
  document.querySelector(".spinner").classList.add("show");
}

// Hide spinner
function hideSpinner() {
  document.querySelector(".spinner").classList.remove("show");
}

// Display popular shows
async function displayPopularTVShows() {
  const { results } = await fetchAPIData("tv/popular");

  console.log(results);

  results.forEach((show) => {
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
    <a href="tv-details.html?id=${show.id}">
    <img
      src="images/no-image.jpg"
      class="card-img-top"
      alt="${show.name}"
    />
  </a>
  <div class="card-body">
    <h5 class="card-title">${show.name}</h5>
    <p class="card-text">
      <small class="text-muted">Aired: ${show.first_air_day}</small>
    </p>
  </div>
    `;

    document.querySelector("#popular-shows").appendChild(div);
  });
}

// Highlight Active link
function highlightActiveLink() {
  const links = document.querySelectorAll(".nav-link");

  links.forEach((link) => {
    if (link.getAttribute("href") === global.currentPage) {
      link.classList.add("active");
    }
  });
}

// FETCH data from API
async function fetchAPIData(endpoint) {
  const API_KEY = "0df4d8122ee146e4718616c0bfd1b410";
  const API_URL = "https://api.themoviedb.org/3/";

  const response = await fetch(
    `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`
  );

  showSpinner();

  const data = await response.json();

  hideSpinner();

  return data;
}

// Display popular movies
async function displayPopularMovies() {
  const { results } = await fetchAPIData("movie/popular");

  // console.log(results);

  results.forEach((movie) => {
    const div = document.createElement("div");
    div.classList.add("card");

    // ${
    //   movie.poster_path
    //     ? `<img
    //       src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
    //           src="./images/no-image.jpg"
    //       class="card-img-top"
    //       alt="${movie.title}"
    //     />`
    //     : `<img
    //       src="images/no-image.jpg"
    //       class="card-img-top"
    //       alt="${movie.title}"
    //     />`
    // }

    div.innerHTML = `
    <a href="movie-details.html?id=${movie.id}">
    <img
          src="images/no-image.jpg"
          class="card-img-top"
          alt="${movie.title}"
        />

          </a>
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">
              <small class="text-muted">Release: ${movie.release_date}</small>
            </p>
          </div>
    `;

    document.querySelector("#popular-movies").appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", init);
