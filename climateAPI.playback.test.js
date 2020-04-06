const jquery = require('jquery');
ClimateAPI = require('./climateAPI');
const { fork } = require('child_process');

const climateAPI = new ClimateAPI("http://localhost:61417");

var forked = null;

beforeAll(() => {

    forked = fork('servirtium.js', { silent: true });
    forked.stdout.on('data', function (chunk) {
        console.log("Stdout in child: " + chunk);
    });

    forked.on('message', (msg) => {
        // no messages come back from child
        console.log('Message from child', msg);
    });

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    };

    sleep(10000).then(() => {
        // give servirtium listener time to come up
    });
});

afterAll(() => {
    jquery.ajax({
        async: false,
        type: "GET",
        url: this.baseUrl + "/*SERVIRTIUM*STOP*/",
    });
});

test('average Rainfall For Great Britain From 1980 to 1999 Exists', () => {
    expect(climateAPI.getAveAnnualRainfall(1980, 1999, "gbr")).toBeCloseTo(988.8454972331015);
});

