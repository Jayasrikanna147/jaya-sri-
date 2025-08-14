const movie = {
  movieName: "wednesday",
  movieLanguage: "English",
  imdbRating: 8.8
};
const { movieName, movieLanguage, imdbRating } = movie;
console.log("Movie Name:", movieName);
console.log("Language:", movieLanguage);
console.log("IMDb Rating:", imdbRating);
document.getElementById("name").textContent = movieName;
document.getElementById("language").textContent = movieLanguage;
document.getElementById("rating").textContent = imdbRating;
