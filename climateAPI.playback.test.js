ClimateAPI = require('./climateAPI');
const { fork } = require('child_process');

const climateAPI = new ClimateAPI("https://localhost:61417");

var forked = null;

beforeAll(() => {
    console.log("beforeAll 1");

    forked = fork('/scm/oss/servirtium/foo/servirtium.js', { silent: true });
    forked.stdout.on('data', function (chunk) {
        console.log("Stdout in child: " + chunk);
    });

    forked.on('message', (msg) => {
        // no messages come back from child
        console.log('Message from child', msg);
    });

    console.log("beforeAll 2");

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    };

    sleep(2000).then(() => {
        // give servirtium listener time to come up
    });
});

afterAll(() => {
    console.log("STOPPING");
    forked.send({ stop: 'now' });
});

test('one', () => {
    console.log("hi");
});

