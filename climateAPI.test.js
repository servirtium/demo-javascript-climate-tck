ClimateAPI = require('./climateAPI');

const climateAPI = new ClimateAPI();

test('average Rainfall For Great Britain From 1980 to 1999 Exists', async () => {
  expect(await climateAPI.getAveAnnualRainfall(1980, 1999, "gbr")).toBeCloseTo(988.8454972331015);
});

test('average Rainfall For France From 1980 to 1999 Exists', async () => {
  expect(await climateAPI.getAveAnnualRainfall(1980, 1999, "fra")).toBeCloseTo(913.7986955122727);
});

test('average Rainfall For Egypt From 1980 to 1999 Exists', async () => {
  expect(await climateAPI.getAveAnnualRainfall(1980, 1999, "egy")).toBeCloseTo(54.58587712129825);
});

test('average Rainfall For Great Britain From 1985 to 1995 Does Not Exists', async () => {
  expect(await climateAPI.getAveAnnualRainfall(1985, 1995, "gbr")).toBe("no data for date range");
});

test('average Rainfall For Middle Earth From 1980 to 1999 Exists', async () => {
  expect(await climateAPI.getAveAnnualRainfall(1980, 1999, "mde")).toBe("Invalid country code. Three letters are required");
});