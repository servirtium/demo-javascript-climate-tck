## Interaction 0: GET /climateweb/rest/v1/country/annualavg/pr/1980/1999/gbr.xml
### Request headers recorded for playback:

```
connection: close
accept-encoding: gzip, deflate
host: climatedataapi.worldbank.org
origin: http://localhost
accept-language: en
user-agent: Mozilla/5.0 (darwin) AppleWebKit/537.36 (KHTML, like Gecko) jsdom/15.2.1
referer: http://localhost/
accept: application/json, text/plain, */*
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Sun, 09 Aug 2020 18:41:39 GMT
content-type: application/xml
connection: close
set-cookie: AWSALB=giBWwxGqiGoSygdx/rd5U+NQPgweEQQnNs5r/tjsOgHCSSd5dvb6WZP6fYO78T5UKUIN4Z2LGb+chZZbCMLGqjVCkUdZ/2kiDx42A7dP6o696eS0ReNNe6/zt/dd; Expires=Sun, 16 Aug 2020 18:41:39 GMT; Path=/,AWSALBCORS=giBWwxGqiGoSygdx/rd5U+NQPgweEQQnNs5r/tjsOgHCSSd5dvb6WZP6fYO78T5UKUIN4Z2LGb+chZZbCMLGqjVCkUdZ/2kiDx42A7dP6o696eS0ReNNe6/zt/dd; Expires=Sun, 16 Aug 2020 18:41:39 GMT; Path=/; SameSite=None; Secure,TS01c35ec3=010f7a2ab08dfc0e277fc1eeae15171af3242799e2af07ed5b8b5a1ceba2e43bc6853da630cc5b0ce5292da2d0f1258cbc47467042; Path=/,climatedataapi.cookie=2615193866.33060.0000; path=/; Httponly,climatedataapi_ext.cookie=2543955978.20480.0000; path=/; Httponly,TS0137860d=017189f9473f598cb34046b264a85f0dc3fb6a1bfbd152e37e0f30f11336b40c36f3bd21139eaea409abd477c5c0e89cbd4f2946fb9d223063a5ee7043cd17b28bc0fa299897db651e4a07c36522685ecdf04853c30646e389993573371edff512c0d995ec317ded6dea430b3a202db27fe5e86484758d80c3045e37698e1d112ca63c1fa5; Path=/
strict-transport-security: max-age=0, max-age=31536000; includeSubDomains
x-frame-options: DENY, deny
x-content-type-options: nosniff, nosniff
x-xss-protection: 1; mode=block, 1; mode=block
access-control-allow-origin: *
access-control-allow-headers: X-Requested-With
access-control-allow-methods: GET
content-security-policy: default-src 'self'
cache-control: no-cache,no-store
pragma: no-cache
secure: true
httponly: true
transfer-encoding: chunked
```

### Response body recorded for playback (200: application/xml):

```
<list>
  <domain.web.AnnualGcmDatum>
    <gcm>bccr_bcm2_0</gcm>
    <variable>pr</variable>
    <fromYear>1980</fromYear>
    <toYear>1999</toYear>
    <annualData>
      <double>987.9504418944</double>
    </annualData>
  </domain.web.AnnualGcmDatum>
  <domain.web.AnnualGcmDatum>
    <gcm>cccma_cgcm3_1</gcm>
    <variable>pr</variable>
    <fromYear>1980</fromYear>
    <toYear>1999</toYear>
    <annualData>
      <double>815.2627636718801</double>
    </annualData>
  </domain.web.AnnualGcmDatum>
  <domain.web.AnnualGcmDatum>
    <gcm>cnrm_cm3</gcm>
    <variable>pr</variable>
    <fromYear>1980</fromYear>
    <toYear>1999</toYear>
    <annualData>
      <double>1099.3898999037601</double>
    </annualData>
  </domain.web.AnnualGcmDatum>
  <domain.web.AnnualGcmDatum>
    <gcm>csiro_mk3_5</gcm>
    <variable>pr</variable>
    <fromYear>1980</fromYear>
    <toYear>1999</toYear>
    <annualData>
      <double>1021.6996069333198</double>
    </annualData>
  </domain.web.AnnualGcmDatum>
  <domain.web.AnnualGcmDatum>
    <gcm>gfdl_cm2_0</gcm>
    <variable>pr</variable>
    <fromYear>1980</fromYear>
    <toYear>1999</toYear>
    <annualData>
      <double>1019.8750146478401</double>
    </annualData>
  </domain.web.AnnualGcmDatum>
  <domain.web.AnnualGcmDatum>
    <gcm>gfdl_cm2_1</gcm>
    <variable>pr</variable>
    <fromYear>1980</fromYear>
    <toYear>1999</toYear>
    <annualData>
      <double>1084.5603759764</double>
    </annualData>
  </domain.web.AnnualGcmDatum>
  <domain.web.AnnualGcmDatum>
    <gcm>ingv_echam4</gcm>
    <variable>pr</variable>
    <fromYear>1980</fromYear>
    <toYear>1999</toYear>
    <annualData>
      <double>1008.2985131833999</double>
    </annualData>
  </domain.web.AnnualGcmDatum>
  <domain.web.AnnualGcmDatum>
    <gcm>inmcm3_0</gcm>
    <variable>pr</variable>
    <fromYear>1980</fromYear>
    <toYear>1999</toYear>
    <annualData>
      <double>1194.9564575200002</double>
    </annualData>
  </domain.web.AnnualGcmDatum>
  <domain.web.AnnualGcmDatum>
    <gcm>ipsl_cm4</gcm>
    <variable>pr</variable>
    <fromYear>1980</fromYear>
    <toYear>1999</toYear>
    <annualData>
      <double>893.9680444336799</double>
    </annualData>
  </domain.web.AnnualGcmDatum>
  <domain.web.AnnualGcmDatum>
    <gcm>miroc3_2_medres</gcm>
    <variable>pr</variable>
    <fromYear>1980</fromYear>
    <toYear>1999</toYear>
    <annualData>
      <double>1032.85460449136</double>
    </annualData>
  </domain.web.AnnualGcmDatum>
  <domain.web.AnnualGcmDatum>
    <gcm>miub_echo_g</gcm>
    <variable>pr</variable>
    <fromYear>1980</fromYear>
    <toYear>1999</toYear>
    <annualData>
      <double>905.9324633786798</double>
    </annualData>
  </domain.web.AnnualGcmDatum>
  <domain.web.AnnualGcmDatum>
    <gcm>mpi_echam5</gcm>
    <variable>pr</variable>
    <fromYear>1980</fromYear>
    <toYear>1999</toYear>
    <annualData>
      <double>1024.2805590819598</double>
    </annualData>
  </domain.web.AnnualGcmDatum>
  <domain.web.AnnualGcmDatum>
    <gcm>mri_cgcm2_3_2a</gcm>
    <variable>pr</variable>
    <fromYear>1980</fromYear>
    <toYear>1999</toYear>
    <annualData>
      <double>784.5488305664002</double>
    </annualData>
  </domain.web.AnnualGcmDatum>
  <domain.web.AnnualGcmDatum>
    <gcm>ukmo_hadcm3</gcm>
    <variable>pr</variable>
    <fromYear>1980</fromYear>
    <toYear>1999</toYear>
    <annualData>
      <double>957.3522631840398</double>
    </annualData>
  </domain.web.AnnualGcmDatum>
  <domain.web.AnnualGcmDatum>
    <gcm>ukmo_hadgem1</gcm>
    <variable>pr</variable>
    <fromYear>1980</fromYear>
    <toYear>1999</toYear>
    <annualData>
      <double>1001.7526196294</double>
    </annualData>
  </domain.web.AnnualGcmDatum>
</list>
```
