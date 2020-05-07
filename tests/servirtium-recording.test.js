const axios = require('axios');
const tmp = require('tmp');
const fs = require('fs').promises;
const theredoc = require('theredoc');

const Recorder = require('../servirtiumRecorder');

const STATUS_CODE_API = "http://httpstat.us";
const MOCKBIN = "http://mockbin.com";

describe('servertium recorder', ()=>{
  let recorder;

  beforeEach( async ()=>{
  });

  afterEach( async ()=>{
    await recorder.stop();
  });

  it('starts up and takes requests on a port', async ()=> {
    recorder = await Recorder.start({backendUrl:STATUS_CODE_API});
    const http = axios.create({
      baseURL: recorder.baseUrl
    });

    const response = await http.get('/200');
    expect(response.status).toBe(200);
  });

  describe( 'proxying', ()=> {
    it('proxies other status codes', async ()=> {
      recorder = await Recorder.start({backendUrl:STATUS_CODE_API});

      const http = axios.create({
        baseURL: recorder.baseUrl
      });

      const response = await http.get('/202');
      expect(response.status).toBe(202);
    });

    it('proxies response body', async ()=> {
      recorder = await Recorder.start({backendUrl:'http://example.com'});

      const http = axios.create({
        baseURL: recorder.baseUrl
      });

      const response = await http.get('/');
      expect(response.status).toBe(200);
      expect(response.data).toContain('This domain is for use in illustrative examples');
    });

    it('proxies request headers', async ()=> {
      recorder = await Recorder.start({backendUrl:MOCKBIN});

      const http = axios.create({
        baseURL: recorder.baseUrl
      });

      const response = await http.get(
        '/header/x-custom-header',
        {
          headers: {
            'X-Custom-Header': 'foobar',
          }
        }
      );

      expect(response.status).toBe(200);
      expect(response.data).toBe('foobar');
    });

    it('proxies response headers', async ()=> {
      recorder = await Recorder.start({backendUrl:MOCKBIN});

      const http = axios.create({
        baseURL: recorder.baseUrl
      });

      const response = await http.get(
        '/header/x-custom-header',
        {
          headers: {
            'X-Custom-Header': 'foobar',
          }
        }
      );

      expect(response.status).toBe(200);
      expect(response.headers).toHaveProperty('server','Cowboy');
    });
  });

  describe('recording', ()=> {
    let recordPath;
    beforeEach( ()=> {
      recordPath = tmp.fileSync().name;
    });

    it('writes an interaction to a file', async ()=> {
      recorder = await Recorder.start({backendUrl:STATUS_CODE_API,recordPath});

      const http = axios.create({
        baseURL: recorder.baseUrl
      });

      await http.get(
        '/200?foo=bar',
        {
          headers:{
            'Accept': 'application/json'
          }
        }
      );

      // give the recorder a moment to write this interaction to disk
      await sleep(40);

      const recorded = await fs.readFile(recordPath,{encoding:'UTF-8'});

      // TODO: request body, request headers, response headers, response status code
      const expectedRecording = theredoc`
        ## Interaction 0: GET /200?foo=bar

        ### Request headers recorded for playback:

        \`\`\`
        Accept: application/json
        User-Agent: axios/0.19.2
        Host: localhost:61416
        Connection: close
        \`\`\`

        ### Response body recorded for playback

        \`\`\`
        {"code": 200, "description": "OK"}
        \`\`\`
      `;

      expect(recorded).toBe(expectedRecording);
    });
  });
});


function sleep(ms){
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
