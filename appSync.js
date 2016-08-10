var fs = require('fs');
var request = require('request');
var srcFile = 'link.txt';

console.log ('readFileSync...');

var url = fs.readFileSync(srcFile, 'utf8')

request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body)
  }
})

