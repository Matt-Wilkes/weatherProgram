// const jestFetchMock = require("jest-fetch-mock").enableMocks();

const Weather = require("./weather");
const WeatherClient = require("./weatherClient");

describe("Weather", () => {
//   Without mock - Using the weatherClient
  it.skip("should fetch the weather data for Bristol (Skipped)", (done) => {
    const weatherClient = new WeatherClient();
    const weather = new Weather(weatherClient);
    weather.load("Bristol").then((data) => {
      expect(data.name).toEqual("Bristol");
      done();
    });
  });
//   With mocks, Mocking the weatherClient
  it("load should fetch the weather data for Bristol", (done) => {
    const mockClient = {
      fetchWeatherData: jest.fn(), // This is a jest mock function, mocks WeatherClient.fetchWeatherData()
    };
    // mocks returning the 'name' property from fetchWeatherData
    mockClient.fetchWeatherData.mockResolvedValueOnce({
      name: "Bristol",
    });
    // New instance of Weather, Passing mock in as the argument
    const weather = new Weather(mockClient);
    // Used the same function call as with the non-mocked code
    weather.load("Bristol").then((data) => {
      expect(data.name).toEqual("Bristol");
      done();
    });
  });
  it("should return the weather data for Bristol", async () => {
    const mockClient = {
      fetchWeatherData: jest.fn(),
    };
    mockClient.fetchWeatherData.mockResolvedValueOnce({
      name: "Bristol",
    });
 
    const weather = new Weather(mockClient);
    await weather.load("Bristol");
    await expect(weather.getWeatherData()).toEqual({
        name: "Bristol",
      });
    
  });
});
