const axios = require('axios');

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
