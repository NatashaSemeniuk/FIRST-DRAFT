"use strict";
let numberOffilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count : numberOffilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false   
    };

    let lastFilmFirst = prompt('Один из последних просмотренных фильмов?');
    let firstFilmScore = prompt('На сколько оцените его?');

    let lastFilmSecond = prompt('Один из последних просмотренных фильмов?');
    let secondFilmScore = prompt('На сколько оцените его?');

personalMovieDB.movies[lastFilmFirst] = firstFilmScore;
personalMovieDB.movies[lastFilmSecond] = secondFilmScore;

console.log(personalMovieDB);




