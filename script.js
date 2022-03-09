"use strict";

let numberOfFilms;

function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};


function rememberMyFilms(){
    for(let i = 0; i < 2 ; i++){
        const lastFilm = prompt("Один из последних просмотренных фильмов?",""),
              filmRaiting = +prompt("На сколько вы его оцениваете?", "");
          if(lastFilm != null && filmRaiting != null &&  lastFilm != "" && filmRaiting != "" && lastFilm.length < 50){
              personalMovieDB.movies[lastFilm] = filmRaiting;
          }else {
              i--;
          }
      }
}

//rememberMyFilms();

function writeYourGenres() {
    for(let i = 1; i <= 3; i++){
        const myGenres = prompt(`Ваш любимый жанр под номером ${i}`);
        if(myGenres != null &&  myGenres != "" && myGenres.length < 20){
        personalMovieDB.genres[i - 1] = myGenres;
        //personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`); 
        //можно записать так
    } else{
        i--;
    }
}
}

writeYourGenres();

function detectPersonalLevel(){
    if(personalMovieDB.count < 10 ){
        console.log("Просмотрено довольно мало фильмов!");
    }else if(personalMovieDB.count >=10 && personalMovieDB.count < 30){
        console.log("Вы класический зритель!");
    }else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    }else {
        console.log("Произошла ошибка");
    }
}

//detectPersonalLevel();

function showMyDB(){
    if(personalMovieDB.privat != true){
        console.log(personalMovieDB);
    }
}
showMyDB();