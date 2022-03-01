"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");
const lastFilm = prompt("Один из последних просмотренных фильмов?",""),
    filmRaiting = +prompt("На сколько вы его оцениваете?", ""),
    lastFilm2 = prompt("Один из последних просмотренных фильмов?",""),
    filmRaiting2 = +prompt("На сколько вы его оцениваете?", "");
    


const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

personalMovieDB.movies[lastFilm] = filmRaiting;
personalMovieDB.movies[lastFilm2] = filmRaiting2;

console.log(personalMovieDB);