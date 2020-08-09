## Interaction 0: GET /climateweb/rest/v1/country/annualavg/pr/1980/1999/egy.xml
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
date: Sun, 09 Aug 2020 18:41:40 GMT
content-type: application/xml
connection: close
set-cookie: AWSALB=kjMpNlv+DsGiSOrNifW1LWocyfeNJl/4cCt4QlvUdnHxJelpUNwe4myKvh5BhxjMrJ0faa4n5OVjtTL4UrS0KlxobLcDaYGS1ajboN+NbaZiQ6IwCT02uBBEcJf4; Expires=Sun, 16 Aug 2020 18:41:40 GMT; Path=/,AWSALBCORS=kjMpNlv+DsGiSOrNifW1LWocyfeNJl/4cCt4QlvUdnHxJelpUNwe4myKvh5BhxjMrJ0faa4n5OVjtTL4UrS0KlxobLcDaYGS1ajboN+NbaZiQ6IwCT02uBBEcJf4; Expires=Sun, 16 Aug 2020 18:41:40 GMT; Path=/; SameSite=None; Secure,climatedata.cookie=1791010314.64288.0000; path=/; Httponly; Secure,TS01c35ec3=010f7a2ab0c82e2715798134ecb64b2f2aa1c73bbf9cf19b4a0d51934de125ff37f581be9c521d94cbd355889be7369c6752c3be59fae9d199acb8003daaa6a92c8c036ea5; Path=/,climatedataapi.cookie=299940106.33060.0000; path=/; Httponly,climatedataapi_ext.cookie=2543955978.20480.0000; path=/; Httponly,TS0137860d=017189f94712dc2b25e347b733c235eea618c1c1774256938cbfdbc7c21822b122501682b3ca98e418173aa192aafc4a6b74d5994157798346b69070405faa54228a73b2af0cdf8785ea231f521239f4637d2be05fadf7af9a9ca90b0af1f8fcc17bb1f2fd74e6bed608bed056504f6623e8df1619e78e9374a3a3bc257079d113e5e4844cd59b721be07b8b2ad8b842d11e31911e; Path=/
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
      <double>86.9453507501108</double>
    </annualData>
  </domain.web.AnnualGcmDatum>
  <domain.web.AnnualGcmDatum>
    <gcm>cccma_cgcm3_1</gcm>
    <variable>pr</variable>
    <fromYear>1980</fromYear>
    <toYear>1999</toYear>
    <annualData>
      <double>88.30762904406757</double>
    </annualData>
  </domain.web.AnnualGcmDatum>
  <domain.web.AnnualGcmDatum>
    <gcm>cnrm_cm3</gcm>
    <variable>pr</variable>
    <fromYear>1980</fromYear>
    <toYear>1999</toYear>
    <annualData>
      <double>106.36732833443784</double>
    </annualData>
  </domain.web.AnnualGcmDatum>
  <domain.web.AnnualGcmDatum>
    <gcm>csiro_mk3_5</gcm>
    <variable>pr</variable>
    <fromYear>1980</fromYear>
    <toYear>1999</toYear>
    <annualData>
      <double>28.62417012292162</double>
    </annualData>
  </domain.web.AnnualGcmDatum>
  <domain.web.AnnualGcmDatum>
    <gcm>gfdl_cm2_0</gcm>
    <variable>pr</variable>
    <fromYear>1980</fromYear>
    <toYear>1999</toYear>
    <annualData>
      <double>45.26438762045865</double>
    </annualData>
  </domain.web.AnnualGcmDatum>
  <domain.web.AnnualGcmDatum>
    <gcm>gfdl_cm2_1</gcm>
    <variable>pr</variable>
    <fromYear>1980</fromYear>
    <toYear>1999</toYear>
    <annualData>
      <double>26.459523922684326</double>
    </annualData>
  </domain.web.AnnualGcmDatum>
  <domain.web.AnnualGcmDatum>
    <gcm>ingv_echam4</gcm>
    <variable>pr</variable>
    <fromYear>1980</fromYear>
    <toYear>1999</toYear>
    <annualData>
      <double>26.899282784094865</double>
    </annualData>
  </domain.web.AnnualGcmDatum>
  <domain.web.AnnualGcmDatum>
    <gcm>inmcm3_0</gcm>
    <variable>pr</variable>
    <fromYear>1980</fromYear>
    <toYear>1999</toYear>
    <annualData>
      <double>46.921809016059456</double>
    </annualData>
  </domain.web.AnnualGcmDatum>
  <domain.web.AnnualGcmDatum>
    <gcm>ipsl_cm4</gcm>
    <variable>pr</variable>
    <fromYear>1980</fromYear>
    <toYear>1999</toYear>
    <annualData>
      <double>21.791464905471624</double>
    </annualData>
  </domain.web.AnnualGcmDatum>
  <domain.web.AnnualGcmDatum>
    <gcm>miroc3_2_medres</gcm>
    <variable>pr</variable>
    <fromYear>1980</fromYear>
    <toYear>1999</toYear>
    <annualData>
      <double>78.83864541954053</double>
    </annualData>
  </domain.web.AnnualGcmDatum>
  <domain.web.AnnualGcmDatum>
    <gcm>miub_echo_g</gcm>
    <variable>pr</variable>
    <fromYear>1980</fromYear>
    <toYear>1999</toYear>
    <annualData>
      <double>75.66823740260838</double>
    </annualData>
  </domain.web.AnnualGcmDatum>
  <domain.web.AnnualGcmDatum>
    <gcm>mpi_echam5</gcm>
    <variable>pr</variable>
    <fromYear>1980</fromYear>
    <toYear>1999</toYear>
    <annualData>
      <double>31.494514729511625</double>
    </annualData>
  </domain.web.AnnualGcmDatum>
  <domain.web.AnnualGcmDatum>
    <gcm>mri_cgcm2_3_2a</gcm>
    <variable>pr</variable>
    <fromYear>1980</fromYear>
    <toYear>1999</toYear>
    <annualData>
      <double>35.64848946636978</double>
    </annualData>
  </domain.web.AnnualGcmDatum>
  <domain.web.AnnualGcmDatum>
    <gcm>ukmo_hadcm3</gcm>
    <variable>pr</variable>
    <fromYear>1980</fromYear>
    <toYear>1999</toYear>
    <annualData>
      <double>56.096262184318924</double>
    </annualData>
  </domain.web.AnnualGcmDatum>
  <domain.web.AnnualGcmDatum>
    <gcm>ukmo_hadgem1</gcm>
    <variable>pr</variable>
    <fromYear>1980</fromYear>
    <toYear>1999</toYear>
    <annualData>
      <double>63.461061116817845</double>
    </annualData>
  </domain.web.AnnualGcmDatum>
</list>
```
