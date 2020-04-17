const http = require('axios');
const xml2js = require('xml2js')

class ClimateAPI {

  constructor(baseUrl = "http://climatedataapi.worldbank.org") {
    this.baseUrl = baseUrl;
  }

  async getAveAnnualRainfall(fromCCYY, toCCYY, countryISO) {
    var tot = 0;
    var ct = 0;
    let url = `${this.baseUrl}/climateweb/rest/v1/country/annualavg/pr/${fromCCYY}/${toCCYY}/${countryISO}.xml`;
    console.log(`Request URL: ${url}`)
    let response, parsedResponse
    try
    {
      
      response = await http.get(url, {
        headers: {'Accept': 'text/xml'},
        responseType:'text'
      });
    }
    catch(requestError) {
      return requestError;
    }
    try{
       parsedResponse = await xml2js.parseStringPromise(response.data);
    }
    catch (parseError)
    {
      return response.data;
    }
    let annualDataRoot = parsedResponse.list["domain.web.AnnualGcmDatum"]
    
    if (annualDataRoot) {
      annualDataRoot.flatMap(gcm=>gcm.annualData)
        .forEach((valueElement)=> {
          tot = tot + parseFloat(valueElement.double);
          ct = ct + 1;
        });
    }
    else {
      return "no data for date range";
    }
    return tot / ct;
  }
}

module.exports = ClimateAPI;