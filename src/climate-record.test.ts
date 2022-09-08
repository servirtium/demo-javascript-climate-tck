import ClimateAPI, { IClimateAPI } from './climate'
import Servirtium, { IServirtium } from '@servirtium/recorder'
import fs from 'fs';

describe('climateAPI record', () => {
  let climateApiClient: IClimateAPI
  let servirtium: IServirtium

  var realService: string= 'http://worldbank-api-for-servirtium.local.gd:4567'

  if (fs.existsSync(".useGithubHostedRealService")) {
    realService = 'https://servirtium.github.io/worldbank-climate-recordings'
  }

  beforeAll((done) => {
    climateApiClient = new ClimateAPI('http://servirtium.local.gd:61417')
    // Refer https://github.com/servirtium/worldbank-climate-recordings -->
    servirtium = new Servirtium(realService)
    servirtium.setCallerRequestHeaderReplacements({ "user-agent: (.*)": "user-agent: Servirtium-Agent" })
    servirtium.setRecordResponseHeaderReplacements({
      "set-cookie: (.*)": "set-cookie: MASKED",
      "date: (.*)": "date: Sun, 09 Aug 2020 18:42:45 GMT",
      "for_testing: (.*)": "for_testing: SERVIRTIUM-REDACTED"
    })
    servirtium.startRecord(() => {
      done()
    })
  })

  afterAll((done) => {
    servirtium.endRecord(() => {
      done()
    })
  })

  beforeEach((done) => {
    const testName = jasmine['currentTest'].description
    servirtium.setTestName(testName)
    done()
  })

  afterEach(async(done) => {
    await servirtium.writeRecord()
    done()
  })

  it('TestAverageRainfallForGreatBritainFrom1980to1999Exists', async () => {
    try {
      const output = '988.84549723310131333'
      const result = await climateApiClient.getAveAnnualRainfall(1980, 1999, 'gbr')
      expect(result).toEqual(output)
    } catch (error) {
      expect(error).toBeUndefined()
    }
  })

  it('TestAverageRainfallForFranceFrom1980to1999Exists', async () => {
    try {
      const output = '913.79869551227269333'
      const result = await climateApiClient.getAveAnnualRainfall(1980, 1999, 'fra')
      expect(result).toEqual(output)
    } catch (error) {
      expect(error).toBeUndefined()
    }
  })

  it('TestAverageRainfallForEgyptFrom1980to1999Exists', async () => {
    try {
      const output = '54.585877121298255667'
      const result = await climateApiClient.getAveAnnualRainfall(1980, 1999, 'egy')
      expect(result).toEqual(output)
    } catch(error) {
      expect(error).toBeUndefined()
    }
  })

  it('TestAverageRainfallForGreatBritainFrom1985to1995DoesNotExist', async () => {
    try {
      const result = await climateApiClient.getAveAnnualRainfall(1985, 1995, 'gbr')
      expect(result).toBeUndefined()
    } catch (error) {
      expect(error).toEqual('date range 1985-1995 not supported')
    }
  })

  it('TestAverageRainfallForMiddleEarthFrom1980to1999DoesNotExist', async () => {
    try {
      const output = '0'
      const result = await climateApiClient.getAveAnnualRainfall(1980, 1999, 'mde')
      expect(result).toEqual(output)
    } catch (error) {
      expect(error).toEqual('Invalid country code. Three letters are required')
    }
  })
  it('TestAverageRainfallForGreatBritainAndFranceFrom1980to1999Exists', async () => {
    try {
      const output = '988.84549723310131333'
      const result = await climateApiClient.getAveAnnualRainfall(1980, 1999, "gbr")
      expect(result).toEqual(output)
      const output1 = '913.79869551227269333'
      const result1 = await climateApiClient.getAveAnnualRainfall(1980, 1999, "fra")
      expect(result1).toEqual(output1)
    } catch (error) {
      expect(error).toBeUndefined()
    }
  })
})
