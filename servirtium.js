const http = require('http');
const fs = require('fs');
const httpShutdownWrapper = require('http-shutdown');
const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());
const port = 61417;
const jquery = require('jquery');

app.get('/*', (req, res) => {
    console.log(`test_context: ${test_context}`);
    let path = './mocks/' + test_context.replace(/ /g, '_') + '.md';
    var body = fs.readFileSync(path, 'utf8');
    chunks = body.split("\n### ");
    console.log(`route: ${req.route.path}, url: ${req.url}`);
    res.send(chunks[4].split('\n```\n')[1]);
});

let server;
let test_context;

module.exports = {
  start: ()=>new Promise((res, rej) =>{
    server = httpShutdownWrapper(http.createServer(app));
    server.listen(port, 'localhost', (err)=> {
      console.log(`Servirtium listening on port ${port}`);
      res(server)
    });

  }),
  stop: ()=>new Promise((res, rej) =>{
    server.shutdown(()=>{
      console.log(`Servirtium graceful shutdown complete`);
      res()
    })
  }),
  context: (ctx)=>new Promise((res, rej) =>{
    test_context = ctx;
    res()
  })
};