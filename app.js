let numberOfFilms = prompt("Сколько фильмов вы просмотрели?");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
let a, b, c, d;
a = prompt("Один из последних фильмов?", "");
b = prompt("На сколько оцените его?", "");
c = prompt("Один из последних фильмов?", "");
d = prompt("На сколько оцените его?", "");
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
