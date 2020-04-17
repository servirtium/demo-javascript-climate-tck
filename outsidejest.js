
ClimateAPI = require('./climateAPI');
const servirtium = require('./servirtium');
const climateAPI = new ClimateAPI("http://localhost:61417");


(async () => {
    console.log("Starting Servirtium");
    await servirtium.start();
    console.log("Started Servirtium");
    console.log(`Result: ${await climateAPI.getAveAnnualRainfall(1980, 1999, "gbr")}`);
    console.log("Stopping Servirtium");
    await servirtium.stop();
    console.log("Stopped Servirtium");
})().catch((err)=>console.log(err))