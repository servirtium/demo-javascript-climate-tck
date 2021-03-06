# Servirtium demo for Javascript

This repo was build following the step by step guide at https://servirtium.dev/new 

- status: pretty much complete

As well as making a Servirtium library for a language, this step by step guild leaves you with a **contrived** example library that serves as a example of how to use Servirtium.

Someone wanting to see an example of how to use Servirtium for a NodeJS project would look at ths repo's source. Someone wanting to learn Servirtium by tutorial or extensive reference documentation needs to look elsewhere - sorry!

# Climate API library premise

A reusable library for JavaScript usage that gives you average rainfall for a country. This implementation (the reference implementation) uses The world bank's REST Web-APIs - http://climatedataapi.worldbank.org/climateweb/rest/v1/country/annualavg/pr/{fromCCYY}/{toCCYY}/{countryISO}.xml - for that (other implementations may not).

The library comes with tests and recordings of the climatedataapi.worldbank.org service invocations for each test.

The library comes with a means to re-record those service invocations.

Teams using the library (but not developing it) may:

* use the recordings to make their own builds fast and always green (versus slow and flaky).
* write their own service test scenarios and use Servirtium to record the Worldbank interaction as above (more likely)

Service tests (part of the integration test class) are one thing, but there should always be a smaller number of them than pure unit tests (no I/O, less than 10ms each). Teams using this library in a larger application would use traditional in-process mocking (say via [TsMockito](https://github.com/NagRock/ts-mockito)).

Another dev team could use the recordings, as is, to make a new implementation of the library for some reason (say they did not like the license). And they need not even have access to climatedataapi.worldbank.org. Some companies happily shipping Servirtium service recordings for specific test scenarios may attach a license agreement that forbids reverse engineering (of the closed-source backend, or the shipped library)

# Building & Tests
    
## Yarn dependency installation

```
yarn install
```

## Running tests

```
yarn test
```

There are 18 Jest tests in this "TCK" project:

* 6 tests that don't use Servirtium and directly invoke services on WorkBank.com's climate endpoint. 
* 6 tests that do the above, but also record the interactions via Servirtium
* 6 tests that don't at all use WorldBank (or need to be online), but instead use the recordings in the above via Servirtium

## Psuedocode for the 6 tests:

```
test_averageRainfallForGreatBritainFrom1980to1999Exists()
    assert climateApi.getAveAnnualRainfall(1980, 1999, "gbr") == 988.8454972331015

test_averageRainfallForFranceFrom1980to1999Exists()
    assert climateApi.getAveAnnualRainfall(1980, 1999, "fra") == 913.7986955122727

test_averageRainfallForEgyptFrom1980to1999Exists()
    assert climateApi.getAveAnnualRainfall(1980, 1999, "egy") == 54.58587712129825

test_averageRainfallForGreatBritainFrom1985to1995DoesNotExist()
    climateApi.getAveAnnualRainfall(1985, 1995, "gbr")
    ... causes "date range not supported" 

test_averageRainfallForMiddleEarthFrom1980to1999DoesNotExist()
    climateApi.getAveAnnualRainfall(1980, 1999, "mde")
    ... causes "bad country code"

test_averageRainfallForGreatBritainAndFranceFrom1980to1999CanBeCalculatedFromTwoRequests()
    assert climateApi.getAveAnnualRainfall(1980, 1999, "gbr", "fra") == 951.3220963726872
```

These six are repeated three times in this testbase: six direct, sic record and six playback.

## Running the 6 direct tests only:

![image](https://user-images.githubusercontent.com/82182/90219081-34c4d280-ddfd-11ea-9c2b-b54e270cc7cd.png)

## Running the 6 tests in record-mode only:

![image](https://user-images.githubusercontent.com/82182/90219208-6a69bb80-ddfd-11ea-980d-ec71f7bdb59d.png)

## Running the 6 tests in playback-mode only:

![image](https://user-images.githubusercontent.com/82182/90219297-a00ea480-ddfd-11ea-9610-6450d949d0df.png)
