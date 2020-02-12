import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { startGame } from './js/interface-logic.js';
import { updateWeatherDisplay } from './js/interface-logic.js';
import { WeatherService } from './js/weatherService.js';
// import { thisIsAsync } from  './js/interface-logic.js';
// import { thisIsAsyncTwo } from  './js/interface-logic.js';

$(document).ready(function() {
    $('#weatherLocation').click(function() {
        // thisIsAsyncTwo()
        // thisIsAsync();
      const city = $('#location').val();
      $('#location').val("");
      (() => {
        let weatherService = new WeatherService();
        weatherService.temperatureForCityCall(city)
        .then(function(response) {
            let body = JSON.parse(response);
            let cityTwo = body.name;
            let temp = body.main.temp;
            startGame(temp);
            updateWeatherDisplay(cityTwo, temp);
        })
        .catch((error) => {
            $('.showErrors').text(`There was an error processing your request: ${error.message}`);
        })
      })();
  });
});