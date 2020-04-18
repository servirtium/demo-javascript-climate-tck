ClimateAPI = require('./climateAPI');
const servirtium = require('./servirtium');
const climateAPI = new ClimateAPI("http://localhost:61417");

beforeAll(async () => {
    await servirtium.start();
});


test('average Rainfall For Great Britain From 1980 to 1999 Exists', async () => {
    servirtium.context('average Rainfall For Great Britain From 1980 to 1999 Exists');
    expect(await climateAPI.getAveAnnualRainfall(1980, 1999, "gbr")).toBeCloseTo(988.8454972331015);
});

afterAll(async ()=> {
    await servirtium.stop();
});