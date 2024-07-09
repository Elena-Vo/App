"use strict"
let header = document.querySelector("h1");
header.innerHTML = "you are the great!";

/* 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?' */

let numberOfFilms = prompt("how many films did you see?", " ")
//console.log(numberOfFilms);

/* 2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false */

    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false,

    };
    //console.log(personalMovieDB);

   /*  3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }
 */

let filmName = prompt("Film you has last seen?", " ");
let estimation = prompt("Rate the film on a scale from 1 to 10", " ");
let filmName2 = prompt("Film you has last seen?", " ");
let estimation2 = prompt("Rate the film on a scale from 1 to 10", " ");

personalMovieDB.movies[filmName] = estimation;
personalMovieDB.movies[filmName2] = estimation2;
console.log(personalMovieDB);