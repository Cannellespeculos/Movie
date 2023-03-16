import "./style.scss";
const test = document.getElementById("test");
const cliquez = document.getElementById("cliquez");

fetch(
  `https://api.themoviedb.org/3/trending/all/day?api_key=${
    import.meta.env.VITE_API_KEY
  }`
)
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    cliquez.addEventListener("click", () => {
      let random = Math.floor(Math.random() * (19 - 0) + 0);
      const movie = res.results[random];
      console.log("efsefef");
      if (!movie.title) {
        test.innerHTML = `<h3>${movie.name}</h3>
        <img class="img" src=${
          "https://image.tmdb.org/t/p/original/" + movie.poster_path
        }>
        <p>${movie.media_type}</p>
         <p>${movie.overview}</p>
         `;
      } else {
        test.innerHTML = `<h3>${movie.title}</h3>
        <img class="img" src=${
          "https://image.tmdb.org/t/p/original/" + movie.poster_path
        }>
        <p>${movie.media_type}</p>
         <p>${movie.overview}</p>
    `;
      }
    });
  });

