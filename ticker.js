#! /usr/local/bin/node

var https = require('https');

function ticker() {
  var options = {
    hostname: 'poloniex.com',
    path: '/public?command=returnTicker',
    method: 'GEt',
  };

  var callback = function(response) {
    var data = "";

    response.on('data', function(chunk) {
      data += chunk;
    });

    response.on('end', function() {
      console.log(JSON.parse(data).USDT_ETH);
    });
  }
  var req = https.request(options, callback).end();
}


ticker();
