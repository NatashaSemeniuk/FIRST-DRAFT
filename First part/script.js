"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false   
    };

    

    
function rememberMyFilms() {

    for (let i = 0; i < 2; i++) {
        let lastFilm = prompt('Один из последних просмотренных фильмов?');
        let filmScore = prompt('На сколько оцените его?');
    
    if (lastFilm != null && filmScore != null && lastFilm != '' && filmScore != '' && lastFilm.length < 50 && filmScore.length < 50) {
        personalMovieDB.movies[lastFilm] = filmScore;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}
}

rememberMyFilms();

function detectPersonalLevel() {

    if(personalMovieDB < 10) {
        console.log(alert('Просмотрено довольно мало фильмов'));
    } else if (personalMovieDB >= 10 && personalMovieDB < 30) {
        console.log(alert('Вы классический зритель'));
    } else if (personalMovieDB >= 30) {
        console.log(alert('Вы киноман'));
    } else {
        console.log('error');
    }

}

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр ${i}`);
    }
}

writeYourGenres();

function showMyDB (hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);
