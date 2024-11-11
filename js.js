"use strict"
let numberOfFilms

function start() {
  numberOfFilms = +prompt("how many films did you see?", " ")

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("how many films did you see?", " ")
  }
};
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,

};



function rememberMyfilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ""),
          b = prompt("На сколько оцените его?", "");
  
    if (a!= null && b != null && a != " && b != " && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
}

rememberMyfilms()


function detectPersonalLevel () {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено мало фильмов");
  
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы - классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы - киноман");
  } else {
    console.log("Ошибка");
  }
}

detectPersonalLevel ()

/* function showMyDB() {
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  }
};

showMyDB(); */

function showMyDB (hidden) {
  if (!hidden) {
      console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    /* const genre = prompt(`Ваш любимый жанр под номером ${i}`); */
      /* personalMovieDB.genres[i - 1] = genre; */
      personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}

writeYourGenres();

/* мой
function  writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres = prompt(`Ваш любимый жанр под номером ${"номер по порядку"}`, "");
    
  }
};
writeYourGenres()
console.log(personalMovieDB); */


