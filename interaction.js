const {WritableStreamBuffer} = require('stream-buffers');

function createInteraction(file){
  const interactionNumber = 0; // FIXME
  let requestMethod, requestPath, requestRawHeaders, responseRawHeaders;

  const responseTap = new WritableStreamBuffer();

  function recordRequestFrontMatter({method, url, rawHeaders}){
    requestMethod = method;
    requestPath = [url.pathname, url.search, url.hash].join('');
    requestRawHeaders = rawHeaders;
  }

  //TODO: function recordRequestBody()


  function responseHeaders(rspHeaders) {
    responseRawHeaders = rspHeaders

  }

  //TODO: function recordRequestBody()


  function tapResponseStream(responseStream) {
    responseStream.pipe(responseTap);

    responseStream.on('end',captureToFile);
  }

  async function captureToFile(){
    await file.write(`## Interaction ${interactionNumber}: ${requestMethod} ${requestPath}\n\n`);

    await file.write('### Request headers recorded for playback:\n\n');

    await file.write('```\n');
    let headerEntryIsKey = true;
    for( const headerEntry of requestRawHeaders ){
      if(headerEntryIsKey){
        await file.write(`${headerEntry}: `);
      }else{
        await file.write(`${headerEntry}\n`);
      }
      headerEntryIsKey = !headerEntryIsKey;
    }
    await file.write('```\n\n');

    await file.write('### Request body recorded for playback ():\n\n');
    await file.write('```\n');
    await file.write('```\n\n');

    await file.write('### Response headers recorded for playback:\n\n');
    await file.write('```\n');
    for( const k of Object.keys(responseRawHeaders) ){
        await file.write(k + ": " + responseRawHeaders[k] + "\n");
    }
    await file.write('```\n\n');
    // TODO: record response mimetype
    await file.write('### Response body recorded for playback\n\n');

    await file.write('```\n');
    await file.write(responseTap.getContents());
    await file.write('\n```\n');
    await file.sync();
  }

  return {
    recordRequestFrontMatter,
    responseHeaders,
    tapResponseStream
  };
}

const NULL_INTERACTION = {
  recordRequestFrontMatter(){},
  responseHeaders(){},
  tapResponseStream(){}
}

module.exports = {
  createInteraction,
  NULL_INTERACTION
}
