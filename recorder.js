const fs = require('fs').promises;

module.exports = async function createRecorder(recordPath){
  if( !recordPath ){
    return NULL_RECORDER;
  }

  const file = await fs.open(recordPath,'w');

  async function recordInteraction({method,path}){
    await file.write(`## Interaction 0: ${method} ${path}`);
  }

  return {
    recordInteraction
  };
}

const NULL_RECORDER = {
  recordInteraction(){}
}
