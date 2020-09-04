"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    } 
}

if (personalMovieDB.count < 10) {
    console.log('Мало');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log('Classic customer');
} else if (personalMovieDB.count >= 30) {
    console.log('Awesome!');
} else {
    console.log('Bad story...');
}

console.log(personalMovieDB);