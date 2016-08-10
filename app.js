var fs = require('fs');
var request = require('request');
var srcFile = 'link.txt';

console.log ('fs.readFile...');

fs.readFile( srcFile, 'utf8', function(err, dataRead ) {

	var url = dataRead;
	request(url, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    console.log(body)
	  }
	})

})


