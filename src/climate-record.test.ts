import ClimateAPI, { IClimateAPI } from './climate'
import Servirtium, { IServirtium } from './servirtium'

describe('climateAPI record', () => {
  let climateApiClient: IClimateAPI
  let servirtium: IServirtium

  beforeAll((done) => {
    climateApiClient = new ClimateAPI('http://localhost:61417')
    servirtium = new Servirtium('http://climatedataapi.worldbank.org')
    servirtium.replaceRequestHeaders({ "user-agent": "Servirtium-Agent" })
    servirtium.replaceResponseHeaders({ "set-cookie": ["MASKED"], "date": "Sun, 09 Aug 2020 18:42:45 GMT", })
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
