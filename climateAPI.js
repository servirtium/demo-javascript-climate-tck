var jquery = require('jquery');

function getAveAnnualRainfall(fromCCYY, toCCYY, countryISO, baseUrl = "http://climatedataapi.worldbank.org") {
    var tot = 0;
    var ct = 0;
    var err = "";

    jquery.ajax({
        async: false,
        type: "GET",
        url: baseUrl + "/climateweb/rest/v1/country/annualavg/pr/"
            + fromCCYY + "/" + toCCYY + "/" + countryISO + ".xml",
        dataType: "xml",
        success: function (doc, code, response) {
            if (response.responseText === "<list/>") {
                err = "no data for date range";
            } else {
                jquery(doc).find("annualData").each(function () {
                    tot = tot + parseFloat(jquery(this).first().text());
                    ct = ct + 1;
                });
            }
        },
        error: function (data) {
            err = data.responseText;
            console.log("err " + data.responseText)
            // comunicate nature of error
        }
    });

    if (tot > 0) {
        return tot / ct;
    } else {
        return err;
    }

}

module.exports = getAveAnnualRainfall;