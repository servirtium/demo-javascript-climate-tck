const fs = require('fs').promises;
const {NULL_INTERACTION,createInteraction} = require('./interaction');

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

  function newInteraction(){
    //TODO open append, here...
    return createInteraction(file);
    file.close();
  }

  return {
    newInteraction,
  };
}

const NULL_RECORDER = {
  newInteraction(){ return NULL_INTERACTION; }
}
