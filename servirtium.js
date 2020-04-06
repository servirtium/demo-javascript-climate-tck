const express = require('express');
const app = express();
const port = 61417;
var server;

process.on('message', (msg) => {
    // only message we send is to close.
    server.close();
});

app.get('/', (req, res) => {
    process.send({ last_route: req.route.path });
    return res.send('<list/>');
});

server = app.listen(port);