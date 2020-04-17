const http = require('http')
const httpShutdownWrapper = require('http-shutdown')
const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());
const port = 61417;
const jquery = require('jquery');

app.get('/*', (req, res) => {
    console.log(`route: ${req.route.path}, url: ${req.url}`);
    res.send('<list>\n' +
        '  <domain.web.AnnualGcmDatum>\n' +
        '    <gcm>bccr_bcm2_0</gcm>\n' +
        '    <variable>pr</variable>\n' +
        '    <fromYear>1980</fromYear>\n' +
        '    <toYear>1999</toYear>\n' +
        '    <annualData>\n' +
        '      <double>987.9504418944</double>\n' +
        '    </annualData>\n' +
        '  </domain.web.AnnualGcmDatum>\n' +
        '  <domain.web.AnnualGcmDatum>\n' +
        '    <gcm>cccma_cgcm3_1</gcm>\n' +
        '    <variable>pr</variable>\n' +
        '    <fromYear>1980</fromYear>\n' +
        '    <toYear>1999</toYear>\n' +
        '    <annualData>\n' +
        '      <double>815.2627636718801</double>\n' +
        '    </annualData>\n' +
        '  </domain.web.AnnualGcmDatum>\n' +
        '  <domain.web.AnnualGcmDatum>\n' +
        '    <gcm>cnrm_cm3</gcm>\n' +
        '    <variable>pr</variable>\n' +
        '    <fromYear>1980</fromYear>\n' +
        '    <toYear>1999</toYear>\n' +
        '    <annualData>\n' +
        '      <double>1099.3898999037601</double>\n' +
        '    </annualData>\n' +
        '  </domain.web.AnnualGcmDatum>\n' +
        '  <domain.web.AnnualGcmDatum>\n' +
        '    <gcm>csiro_mk3_5</gcm>\n' +
        '    <variable>pr</variable>\n' +
        '    <fromYear>1980</fromYear>\n' +
        '    <toYear>1999</toYear>\n' +
        '    <annualData>\n' +
        '      <double>1021.6996069333198</double>\n' +
        '    </annualData>\n' +
        '  </domain.web.AnnualGcmDatum>\n' +
        '  <domain.web.AnnualGcmDatum>\n' +
        '    <gcm>gfdl_cm2_0</gcm>\n' +
        '    <variable>pr</variable>\n' +
        '    <fromYear>1980</fromYear>\n' +
        '    <toYear>1999</toYear>\n' +
        '    <annualData>\n' +
        '      <double>1019.8750146478401</double>\n' +
        '    </annualData>\n' +
        '  </domain.web.AnnualGcmDatum>\n' +
        '  <domain.web.AnnualGcmDatum>\n' +
        '    <gcm>gfdl_cm2_1</gcm>\n' +
        '    <variable>pr</variable>\n' +
        '    <fromYear>1980</fromYear>\n' +
        '    <toYear>1999</toYear>\n' +
        '    <annualData>\n' +
        '      <double>1084.5603759764</double>\n' +
        '    </annualData>\n' +
        '  </domain.web.AnnualGcmDatum>\n' +
        '  <domain.web.AnnualGcmDatum>\n' +
        '    <gcm>ingv_echam4</gcm>\n' +
        '    <variable>pr</variable>\n' +
        '    <fromYear>1980</fromYear>\n' +
        '    <toYear>1999</toYear>\n' +
        '    <annualData>\n' +
        '      <double>1008.2985131833999</double>\n' +
        '    </annualData>\n' +
        '  </domain.web.AnnualGcmDatum>\n' +
        '  <domain.web.AnnualGcmDatum>\n' +
        '    <gcm>inmcm3_0</gcm>\n' +
        '    <variable>pr</variable>\n' +
        '    <fromYear>1980</fromYear>\n' +
        '    <toYear>1999</toYear>\n' +
        '    <annualData>\n' +
        '      <double>1194.9564575200002</double>\n' +
        '    </annualData>\n' +
        '  </domain.web.AnnualGcmDatum>\n' +
        '  <domain.web.AnnualGcmDatum>\n' +
        '    <gcm>ipsl_cm4</gcm>\n' +
        '    <variable>pr</variable>\n' +
        '    <fromYear>1980</fromYear>\n' +
        '    <toYear>1999</toYear>\n' +
        '    <annualData>\n' +
        '      <double>893.9680444336799</double>\n' +
        '    </annualData>\n' +
        '  </domain.web.AnnualGcmDatum>\n' +
        '  <domain.web.AnnualGcmDatum>\n' +
        '    <gcm>miroc3_2_medres</gcm>\n' +
        '    <variable>pr</variable>\n' +
        '    <fromYear>1980</fromYear>\n' +
        '    <toYear>1999</toYear>\n' +
        '    <annualData>\n' +
        '      <double>1032.85460449136</double>\n' +
        '    </annualData>\n' +
        '  </domain.web.AnnualGcmDatum>\n' +
        '  <domain.web.AnnualGcmDatum>\n' +
        '    <gcm>miub_echo_g</gcm>\n' +
        '    <variable>pr</variable>\n' +
        '    <fromYear>1980</fromYear>\n' +
        '    <toYear>1999</toYear>\n' +
        '    <annualData>\n' +
        '      <double>905.9324633786798</double>\n' +
        '    </annualData>\n' +
        '  </domain.web.AnnualGcmDatum>\n' +
        '  <domain.web.AnnualGcmDatum>\n' +
        '    <gcm>mpi_echam5</gcm>\n' +
        '    <variable>pr</variable>\n' +
        '    <fromYear>1980</fromYear>\n' +
        '    <toYear>1999</toYear>\n' +
        '    <annualData>\n' +
        '      <double>1024.2805590819598</double>\n' +
        '    </annualData>\n' +
        '  </domain.web.AnnualGcmDatum>\n' +
        '  <domain.web.AnnualGcmDatum>\n' +
        '    <gcm>mri_cgcm2_3_2a</gcm>\n' +
        '    <variable>pr</variable>\n' +
        '    <fromYear>1980</fromYear>\n' +
        '    <toYear>1999</toYear>\n' +
        '    <annualData>\n' +
        '      <double>784.5488305664002</double>\n' +
        '    </annualData>\n' +
        '  </domain.web.AnnualGcmDatum>\n' +
        '  <domain.web.AnnualGcmDatum>\n' +
        '    <gcm>ukmo_hadcm3</gcm>\n' +
        '    <variable>pr</variable>\n' +
        '    <fromYear>1980</fromYear>\n' +
        '    <toYear>1999</toYear>\n' +
        '    <annualData>\n' +
        '      <double>957.3522631840398</double>\n' +
        '    </annualData>\n' +
        '  </domain.web.AnnualGcmDatum>\n' +
        '  <domain.web.AnnualGcmDatum>\n' +
        '    <gcm>ukmo_hadgem1</gcm>\n' +
        '    <variable>pr</variable>\n' +
        '    <fromYear>1980</fromYear>\n' +
        '    <toYear>1999</toYear>\n' +
        '    <annualData>\n' +
        '      <double>1001.7526196294</double>\n' +
        '    </annualData>\n' +
        '  </domain.web.AnnualGcmDatum>\n' +
        '</list>');
});

let server;

module.exports = {
  start: ()=>new Promise((res, rej) =>{
    server = httpShutdownWrapper(http.createServer(app));
    server.listen(port, 'localhost', (err)=> {
      console.log(`Servirtium listening on port ${port}`);
      res(server)
    });

  }),
  stop: ()=>new Promise((res, rej) =>{
    server.shutdown(()=>{
      console.log(`Servirtium graceful shutdown complete`);
      res()
    })
      
  })
}