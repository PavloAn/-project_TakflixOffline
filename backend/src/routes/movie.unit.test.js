const Cinema = require('../models/cinema');
const router = require('./cinema');
const mongoose = require('mongoose');
const cinemaRouter = require('./cinema');

describe('Get movie by id', () => {
  it.only('Should check the value (duration)', async () => {
    const axios = require('axios');
    var movies = new Object();
    var movies = {};
    var movies = {
      "628f9aca92f6895013c777f4": 122,
      "6298dbb42594cc232e6749f6": 96,
      "6298dcba2594cc232e674a09": 106
    };
    for (let key in movies) {
      console.log("http://localhost:3000/movies/"+key);   
      await axios
      .get("http://localhost:3000/movies/"+key)
      .then(res => {
        console.log(`statusCode: ${res.status}`);
        console.log(res.data.duration);  
        console.log(movies[key]);
        expect(movies[key]).toBe(res.data.duration); 
      })
      }
  });
});

describe('Get movie by id', () => {
  it.only('Should check the value (title)', async () => {
    const axios = require('axios');
    var movies = new Object();
    var movies = {};
    var movies = {
      "628f9aca92f6895013c777f4": "Стоп-Земля",
      "6298dbb42594cc232e6749f6": "Маріуполіс",
      "6298dcba2594cc232e674a09": "Вулкан"
    };
    for (let key in movies) {
      console.log("http://localhost:3000/movies/"+key);   
      await axios
      .get("http://localhost:3000/movies/"+key)
      .then(res => {
        console.log(`statusCode: ${res.status}`);
        console.log(res.data.title);  
        console.log(movies[key]);
        expect(movies[key]).toBe(res.data.title); 
      })
      }
  });
});

describe('Get movie by id', () => {
  it.only('Should check the value (genre)', async () => {
    const axios = require('axios');
    var movies = new Object();
    var movies = {};
    var movies = {
      "62a748b419eb1dc485e74532": "Драма,Воєнний,Антиутопія",
      "6298de432594cc232e674a29": "Воєнний",
      "6298dd172594cc232e674a0d": "Екологія"
    };
    for (let key in movies) {
      console.log("http://localhost:3000/movies/"+key);   
      await axios
      .get("http://localhost:3000/movies/"+key)
      .then(res => {
        console.log(`statusCode: ${res.status}`);
        console.log(res.data.genre);  
        console.log(movies[key]);
        expect(movies[key]).toBe(res.data.genre); 
      })
      }
  });
});

describe('Get movie by id', () => {
  it.only('Should check the value (director)', async () => {
    const axios = require('axios');
    var movies = new Object();
    var movies = {};
    var movies = {
      "62a748b419eb1dc485e74532": "Валентин Васянович",
      "6298de432594cc232e674a29": "Ахтем Сеїтаблаєв",
      "6298dd172594cc232e674a0d": "Андрій Литвиненко"
    };
    for (let key in movies) {
      console.log("http://localhost:3000/movies/"+key);   
      await axios
      .get("http://localhost:3000/movies/"+key)
      .then(res => {
        console.log(`statusCode: ${res.status}`);
        console.log(res.data.director);  
        console.log(movies[key]);
        expect(movies[key]).toBe(res.data.director); 
      })
      }
  });
});