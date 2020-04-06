const express = require('express');
const app = express();
const port = 61417;
var server;

app.get('/*', (req, res) => {
    if (req.route.path.includes("*SERVIRTIUM*STOP*")) {
        server.close();
        return res.send('OK');
    }
    console.log("route:" + req.route.path );
    res.send('<list/>');
});

server = app.listen(port, 'localhost');