const Cinema = require('../models/cinema');
const router = require('./cinema');
const mongoose = require('mongoose');
const cinemaRouter = require('./cinema');

describe('Get reservations by id', () => {
  it.only('Should check the value (ticketPrice)', async () => {
    const axios = require('axios');
    var reservations = new Object();
    var reservations = {};
    var reservations = {
      "628fb1259ced144720dacef7": 80,
      "628fbc37767bf9243c816d4c": 80,
      "6298e4cb09e417b9ed2b1b35": 80
    };
    for (let key in reservations) {
      console.log("http://localhost:3000/reservations/"+key);   
      await axios
      .get("http://localhost:3000/reservations/"+key)
      .then(res => {
        console.log(`statusCode: ${res.status}`);
        console.log(res.data.ticketPrice);  
        console.log(reservations[key]);
        expect(reservations[key]).toBe(res.data.ticketPrice); 
      })
      }
  });
});

describe('Get reservations by id', () => {
  it.only('Should check the value (total)', async () => {
    const axios = require('axios');
    var reservations = new Object();
    var reservations = {};
    var reservations = {
      "628fb1259ced144720dacef7": 240,
      "628fbc37767bf9243c816d4c": 240,
      "6298e4cb09e417b9ed2b1b35": 160
    };
    for (let key in reservations) {
      console.log("http://localhost:3000/reservations/"+key);   
      await axios
      .get("http://localhost:3000/reservations/"+key)
      .then(res => {
        console.log(`statusCode: ${res.status}`);
        console.log(res.data.total);  
        console.log(reservations[key]);
        expect(reservations[key]).toBe(res.data.total); 
      })
      }
  });
});