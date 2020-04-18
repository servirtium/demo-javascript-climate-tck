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
    var markdown = fs.readFileSync(path, 'utf8');

    var h3s = markdown.split("\n").filter(item => item.startsWith("### ")).join('\n');

    // TODO - confirm that 'h3s' is .. though that has variables
    // console.log(h3s);
    //       ### Request headers recorded for playback:
    //       ### Request body recorded for playback (VAR):
    //       ### Response headers recorded for playback:
    //       ### Response body recorded for playback (VAR2: VAR3):

    chunks = markdown.split("\n### ");
    console.log(`route: ${req.route.path}, url: ${req.url}`);

    var response_headers = [];
    // TODO verify request headers, and fail if not expected
    chunks[1].split('\n```\n')[1];
    // TODO verify request body, and fail if not expected
    chunks[2].split('\n```\n')[1];

    response_headerz = chunks[3].split('\n```\n')[1].split("\n");
    for (h in response_headerz) {
        response_headers[h.split(": ")[0]] = h.split(": ")[1]
    }
    res.set(response_headers);
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