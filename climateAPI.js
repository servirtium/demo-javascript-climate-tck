const http = require('axios');
const xml2js = require('xml2js')

class ClimateAPI {

  constructor(baseUrl = "http://climatedataapi.worldbank.org") {
    this.baseUrl = baseUrl;
  }

  async getAveAnnualRainfall(fromCCYY, toCCYY, countryISO) {
    const url = `${this.baseUrl}/climateweb/rest/v1/country/annualavg/pr/${fromCCYY}/${toCCYY}/${countryISO}.xml`;
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

    const annualDataRoot = parsedResponse.list["domain.web.AnnualGcmDatum"]

    if (!annualDataRoot) {
      return "no data for date range";
    }


    const annualDatas = annualDataRoot.map(datum=>{
      return parseFloat(datum.annualData[0].double[0]);
    });

    return mean(annualDatas);
  }
}

function mean(numbers){
  const sum = numbers.reduce( (sum,curr) => sum+curr );
  return sum/numbers.length;
}

module.exports = ClimateAPI;
