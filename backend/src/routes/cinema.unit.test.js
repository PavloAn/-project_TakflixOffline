const Cinema = require('../models/cinema');
const router = require('./cinema');
const mongoose = require('mongoose');
const cinemaRouter = require('./cinema');

describe('Get cinema by id', () => {
  it.only('Should check the value (title)', async () => {
    const axios = require('axios');
    var cinemas = new Object();
    var cinemas = {};
    var cinemas = {
      "628f9d4492f6895013c77810": "Львів",
      "6298d95f2594cc232e6749a3": "Львів",
      "6298da082594cc232e6749c4": "Львів"
    };
    for (let key in cinemas) {
      console.log("http://localhost:3000/cinemas/"+key);   
      await axios
      .get("http://localhost:3000/cinemas/"+key)
      .then(res => {
        console.log(`statusCode: ${res.status}`);
        console.log(res.data.city);  
        console.log(cinemas[key]);
        expect(cinemas[key]).toBe(res.data.city); 
      })
      }
  });
});

describe('Get cinema by id', () => {
  it.only('Should check the value (seatsAvailable)', async () => {
    const axios = require('axios');
    var cinemas = new Object();
    var cinemas = {};
    var cinemas = {
      "628f9d4492f6895013c77810": 100,
      "6298d95f2594cc232e6749a3": 55,
      "6298da082594cc232e6749c4": 10
    };
    for (let key in cinemas) {
      console.log("http://localhost:3000/cinemas/"+key);   
      await axios
      .get("http://localhost:3000/cinemas/"+key)
      .then(res => {
        console.log(`statusCode: ${res.status}`);
        console.log(res.data.seatsAvailable);  
        console.log(cinemas[key]);
        expect(cinemas[key]).toBe(res.data.seatsAvailable); 
      })
      }
  });
});

describe('Get cinema by id', () => {
  it.only('Should check the value (ticketPrice)', async () => {
    const axios = require('axios');
    var cinemas = new Object();
    var cinemas = {};
    var cinemas = {
      "628f9d4492f6895013c77810": 80,
      "6298d95f2594cc232e6749a3": 100,
      "6298da082594cc232e6749c4": 200
    };
    for (let key in cinemas) {
      console.log("http://localhost:3000/cinemas/"+key);   
      await axios
      .get("http://localhost:3000/cinemas/"+key)
      .then(res => {
        console.log(`statusCode: ${res.status}`);
        console.log(res.data.ticketPrice);  
        console.log(cinemas[key]);
        expect(cinemas[key]).toBe(res.data.ticketPrice); 
      })
      }
  });
});