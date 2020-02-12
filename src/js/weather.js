export class Weather {
  constructor(weatherJson) {
    this.weatherJson = weatherJson;
  }

  getTemperature() {
    let weatherObject = this.weatherJson;
    console.log(weatherObject);
    return weatherObject.main.temp;
  }

}