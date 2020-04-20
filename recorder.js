const fs = require('fs').promises;

// This is still a work in progress.

// TODO:
// - [ ] support multiple interactions
// - [ ] record request body
// - [ ] record request headers
// - [ ] record response headers
// - [ ] record request mime-type
// - [ ] record response status code and mime-type

module.exports = async function createRecorder(recordPath){
  if( !recordPath ){
    return NULL_RECORDER;
  }

  const file = await fs.open(recordPath,'w');

  async function recordInteraction({method,path,response}){
    await file.write(`## Interaction 0: ${method} ${path}\n\n`);

    await file.write('### Response body recorded for playback\n\n');

    await file.write('```\n');
    await file.write(response.bodyBuffer);
    await file.write('\n```\n');
  }

  return {
    recordInteraction
  };
}

const NULL_RECORDER = {
  recordInteraction(){}
}
