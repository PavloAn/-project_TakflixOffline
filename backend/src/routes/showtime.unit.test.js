const Cinema = require('../models/cinema');
const router = require('./cinema');
const mongoose = require('mongoose');
const cinemaRouter = require('./cinema');

describe('Get showtimes by id', () => {
  it.only('Should check the value (role)', async () => {
    const axios = require('axios');
    var showtimes = new Object();
    var showtimes = {};
    var showtimes = {
      "628fa28892f6895013c77823": "628f9aca92f6895013c777f4",
      "628faff09ced144720dacecb": "628f9aca92f6895013c777f4",
      "6298dec12594cc232e674a3a": "6298dcba2594cc232e674a09",
    };
    for (let key in showtimes) {
      console.log("http://localhost:3000/showtimes/"+key);   
      await axios
      .get("http://localhost:3000/showtimes/"+key)
      .then(res => {
        console.log(`statusCode: ${res.status}`);
        console.log(res.data.movieId);  
        console.log(showtimes[key]);
        expect(showtimes[key]).toBe(res.data.movieId); 
      })
      }
  });
});

describe('Get showtimes by id', () => {
  it.only('Should check the value (startAt)', async () => {
    const axios = require('axios');
    var showtimes = new Object();
    var showtimes = {};
    var showtimes = {
      "628fa28892f6895013c77823": "20:00",
      "628faff09ced144720dacecb": "19:00",
      "6298dec12594cc232e674a3a": "18:00",
    };
    for (let key in showtimes) {
      console.log("http://localhost:3000/showtimes/"+key);   
      await axios
      .get("http://localhost:3000/showtimes/"+key)
      .then(res => {
        console.log(`statusCode: ${res.status}`);
        console.log(res.data.startAt);  
        console.log(showtimes[key]);
        expect(showtimes[key]).toBe(res.data.startAt); 
      })
      }
  });
});