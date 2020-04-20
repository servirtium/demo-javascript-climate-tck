const http = require('http');


const HARDCODED_PORT = 61416; // TODO: use get-port or similar to dynamically generate the port

async function start({backendUrl}){
  const mitmServer = await startMitmServer({
    mitmPort:HARDCODED_PORT,
    ...parseBackendUrl(backendUrl)
  });

  function stop(){
    return new Promise( (resolve,reject) => {
      mitmServer.close((err)=>{
        if(err){
          reject(err);
        }else{
          resolve();
        }
      });
    });
  }

  baseUrl = `http://localhost:${HARDCODED_PORT}`;
  return {
    baseUrl,
    stop
  }
}

function startMitmServer({mitmPort,backendPort,backendHost}){
  const mitmServer = http.createServer((mitmReq, mitmRes) => {

    const url = new URL(mitmReq.url,'http://dummy');
    url.port = backendPort;
    url.host = backendHost;

    let headers = {...mitmReq.headers, 'foo':'asdfasdf'};
    delete headers.host;

    const backendReq = http.request(
      url,
      {
        method: mitmReq.method,
        headers
      },
      (backendRes)=> {
        mitmRes.writeHead(
          backendRes.statusCode,
          backendRes.statusMessage,
          backendRes.headers
        );
        backendRes.pipe(mitmRes);
    });

    backendReq.end();
  });


  return new Promise( (resolve,reject) => {
    mitmServer.on('listening',()=>resolve(mitmServer));
    mitmServer.on('error',reject);

    mitmServer.listen({
      host:'localhost',
      port:mitmPort
    });
  });
}

function parseBackendUrl(urlStr){
  const url = new URL(urlStr);
  return {
    backendHost: url.hostname,
    backendPort: url.port
  };
}

module.exports = {
  start,
}
