import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { startGame } from './js/interface-logic.js';

$(document).ready(function() {
    startGame()
    $('#weatherLocation').click(function() {
      const city = $('#location').val();
      $('#location').val("");
  
      let request = new XMLHttpRequest();
      //const url = `http://api.openweathermap.org/data/2.5/weather?q=Portland&appid=47366036d035b13495e87569682306a2`;
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
      request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          const response = JSON.parse(this.responseText);
          getElements(response);
        }
      }
  
      request.open("GET", url, true);
      request.send();
  
     const getElements = function(response) {
        $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
        $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
      }
    });
  });