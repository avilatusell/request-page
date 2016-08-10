var fs = require('fs');
var request = require('request');
var Promise = require('promise');
var srcFile = 'link.txt';

console.log ('promises...');

var getLink = function( srcFile ) {
	return new Promise( function(fullfill, reject) {
		fs.readFile( srcFile, 'utf8', function(err, dataRead ) {
			fullfill(dataRead);
		});
	})
}

var getBodyUrl = function( url ) {
	return new Promise( function(fullfill, reject) {
		request(url, function (error, response, body) {
		  if (!error && response.statusCode == 200) {
		    fullfill(body)
		  }
		})
	})
}

getLink( srcFile )
	.then( getBodyUrl )
	.then( console.log )