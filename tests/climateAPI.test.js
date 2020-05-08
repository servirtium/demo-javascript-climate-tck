const tmp = require('tmp');

const ClimateAPI = require('../climateAPI');
const servirtium = require('../servirtium_playback');
const servirtiumRecorder = require('../servirtiumRecorder');

describe("ClimateAPI", ()=>{
  xdescribe("in direct mode (no Sirvirtium)", ()=>{
    testClimateAPI(undefined);
  });

  describe("in playback mode", ()=>{
    beforeAll(async () => {
      await servirtium.start();
    });

    afterEach(async ()=> {
        // TODO pickup "last failure" from servirium's playback-er, if any.
    });

    afterAll(async ()=> {
      await servirtium.stop();
    });

    testClimateAPI("http://localhost:61417");
  });

  describe("in record mode", ()=> {
    let recorder;
    beforeEach( async ()=> {
    });
    afterEach(async ()=> {
      await recorder.testComplete();
    });
    afterAll(async ()=> {
      await recorder.stop();
    });

    test('average Rainfall For Great Britain From 1980 to 1999 Exists', async () => {
      const climateAPI = new ClimateAPI("http://localhost:61416");
      
      const recordPath = './mocks/average_Rainfall_For_Great_Britain_From_1980_to_1999_Exists.md';
      recorder = await servirtiumRecorder.start({backendUrl:ClimateAPI.PRODUCTION_BASE_URL, recordPath});

      expect(await climateAPI.getAveAnnualRainfall(1980, 1999, "gbr")).toBeCloseTo(988.8454972331015);
    });

    //testClimateAPI("http://localhost:61416");
  });
});

function testClimateAPI(baseUrl){
  const climateAPI = new ClimateAPI(baseUrl);

  test('average Rainfall For Great Britain From 1980 to 1999 Exists', async () => {
      servirtium.context('average Rainfall For Great Britain From 1980 to 1999 Exists');
      expect(await climateAPI.getAveAnnualRainfall(1980, 1999, "gbr")).toBeCloseTo(988.8454972331015);
  });

  test('average Rainfall For France From 1980 to 1999 Exists', async () => {
      servirtium.context('average Rainfall For France From 1980 to 1999 Exists');
      expect(await climateAPI.getAveAnnualRainfall(1980, 1999, "fra")).toBeCloseTo(913.7986955122727);
  });

  test('average Rainfall For Egypt From 1980 to 1999 Exists', async () => {
      servirtium.context('average Rainfall For Egypt From 1980 to 1999 Exists');
      expect(await climateAPI.getAveAnnualRainfall(1980, 1999, "egy")).toBeCloseTo(54.58587712129825);
  });

  test('average Rainfall For Great Britain From 1985 to 1995 Does Not Exist', async () => {
      servirtium.context('average Rainfall For Great Britain From 1985 to 1995 Does Not Exist');
      expect(await climateAPI.getAveAnnualRainfall(1985, 1995, "gbr")).toBe("no data for date range");
  });

  test('average Rainfall For Middle Earth From 1980 to 1999 Does Not Exist', async () => {
      servirtium.context('average Rainfall For Middle Earth From 1980 to 1999 Does Not Exist');
      expect(await climateAPI.getAveAnnualRainfall(1980, 1999, "mde")).toBe("Invalid country code. Three letters are required");
  });

}
