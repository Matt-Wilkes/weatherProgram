const Client = require('./weatherClient');

class Weather {
    constructor(clientClass) {
        this.client = clientClass;
        this.data = null;
    }
    load(city) {
        return this.client.fetchWeatherData(city).then((response) => {
            // console.log(response);
            this.data = response;
            return response;
        });
    }
    getWeatherData() {
        return this.data;
    }

}

module.exports = Weather;

// const client = new Client;
// const weather = new Weather(client);
// weather.load('Bristol');
// // setTimeout(() => {
// //     console.log(weather.getWeatherData());
// // }, 5000)
// setTimeout(() => {
//     console.log(weather.data);
// }, 5000)

