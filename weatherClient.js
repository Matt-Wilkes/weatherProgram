const apiKey = require("./apikey");

class WeatherClient {
  constructor() {
  }
  fetchWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    return fetch(apiUrl).then((response) => response.json())
      .then((weatherData) => {
        return weatherData;
      });
  }
}

module.exports = WeatherClient;

// const weatherClient = new WeatherClient();
// weatherClient.fetchWeatherData('London');

