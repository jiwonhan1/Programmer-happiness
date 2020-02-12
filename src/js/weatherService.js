export class WeatherService {
  constructor() {

  }
  temperatureForCityCall(city) {
      return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
        request.onload = function() {
          if (this.status === 200) {
            resolve(request.response);
          } else {
            reject(Error(request.statusText));
          }
        }
        request.open("GET", url, true);
        request.send();
    });
  }

}
// export function initialWeatherCallForTemperature() {
    
//     });

//     export function weatherCallForCityTemperature(city) {
//       return new Promise(function(resolve, reject) {
//         let request = new XMLHttpRequest();
//         let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
//         request.onload = function() {
//           if (this.status === 200) {
//             resolve(request.response);
//           } else {
//             reject(Error(request.statusText));
//           }
//         }
//         request.open("GET", url, true);
//         request.send();
//       });
//    promise.then(function(response) {
//     let body = JSON.parse(response);
//     $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
//     $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
//     return body;
//   }, function(error) {
//     $('.showErrors').text(`There was an error processing your request: ${error.message}`);
//   });
//     }

