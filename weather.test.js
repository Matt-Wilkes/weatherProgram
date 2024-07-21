// const jestFetchMock = require("jest-fetch-mock").enableMocks();

const Weather = require("./weather");
const WeatherClient = require('./weatherClient');

// Ill need to mock the weatherClient

describe("Weather", () => {
  it("should fetch the weather data for Bristol", (done) => {
    const weatherClient = new WeatherClient;
    const weather = new Weather(weatherClient);
    weather.load('Bristol').then((data) => {
        expect(data.name).toEqual('Bristol');
        done();
    })
  });
});
