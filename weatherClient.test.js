const WeatherClient = require("./weatherClient");
const apiKey = require("./apikey");

describe("WeatherClient", () => {
    // this works
  it("should fetch the weather for London", async () => {
    const weatherClient = new WeatherClient();
    const weatherData = await weatherClient.fetchWeatherData("London");
    expect(weatherData.name).toBe("London");
  });
  it("should fetch the weather for London", (done) => {
    const weatherClient = new WeatherClient();
    weatherClient.fetchWeatherData("London").then((data) => {
        expect(data.name).toBe("London");
        done();
    })
    
  });

});
