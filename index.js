// const apiKey = require("./apikey");

// let weatherData = null;

// // console.log('Requesting weather data');

// class WeatherClient {
//   constructor() {}
//   fetchWeatherData(city) {
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((weatherData) => {
//         console.log(`Weather data for ${weatherData.name}:`)
//         console.log(weatherData);
//       });
//   }
// }

// module.exports = WeatherClient;

// const client = new WeatherClient();
// client.fetchWeatherData('Birmingham');
