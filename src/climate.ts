import axios from 'axios'
import * as xml2js from 'xml2js'
import { Decimal } from 'decimal.js'

export interface IClimateAPI {
  getAveAnnualRainfall(fromCCYY: number, toCCYY: number, countryISO: string): Promise<string>
}

export type AnnualData = {
  double: string
}

export type AnualGcmDatum = {
  gcm: string[]
  variable: string[]
  fromYear: string[]
  toYear: string[]
  annualData: AnnualData[]
}

export type ClimateResult = {
  list: {
    'domain.web.AnnualGcmDatum': AnualGcmDatum[]
  }
}

class ClimateAPI {
  private _baseUrl: string
  constructor(baseUrl = 'http://climatedataapi.worldbank.org') {
    this._baseUrl = baseUrl
  }

  private _getAnnualRainfall = async (fromCCYY: number, toCCYY: number, countryISO: string): Promise<ClimateResult> => {
    const url = `${this._baseUrl}/climateweb/rest/v1/country/annualavg/pr/${fromCCYY}/${toCCYY}/${countryISO}.xml`;
    try {
      const xmlResult = await axios.get(url)
      return xml2js.parseStringPromise(xmlResult.data).then((result: ClimateResult) => {
        return result
      }).catch(() => {
        return xmlResult.data
      })
    } catch(error) {
      throw error
    }
  }

  private _calculateAveAnual = (climateResult: ClimateResult, totalDatum: number): string => {
    let totalAnualData = new Decimal(0)
    const totalDatumDec = new Decimal(totalDatum)
    climateResult?.list?.['domain.web.AnnualGcmDatum']?.forEach((item) => {
      const currentAnnualData = new Decimal(item?.annualData?.[0]?.double?.[0])
      totalAnualData = totalAnualData?.plus(currentAnnualData)
    })
    return totalAnualData?.dividedBy(totalDatumDec)?.toString()
  }

  public getAveAnnualRainfall = async (fromCCYY: number, toCCYY: number, countryISO: string): Promise<string> => {
    try{
      const result = await this._getAnnualRainfall(fromCCYY, toCCYY, countryISO)
      const totalDatum = result?.list?.['domain.web.AnnualGcmDatum']?.length
      if (typeof result?.list === 'undefined') {
        throw result
      }
      if(!totalDatum || totalDatum < 1) {
        throw `date range ${fromCCYY}-${toCCYY} not supported`
      }
      const aveAnualRainfall = this._calculateAveAnual(result, totalDatum)
      return aveAnualRainfall
    } catch (error) {
      throw error
    }
  }
}

export default ClimateAPI
