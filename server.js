//Load modules.
var path       = require('path');
var express    = require('express');
//Private packages.
var config    = require('./config');

//Create an express app.
var app = express();

app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET');
	next();
});

//The files which exist in this directory are cosidered static and can be server imediatelly. This directory contains our front end.
app.use(express.static(__dirname + '/public'));

//Catch all route. Muste be the last route.
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

//Start the express app.
app.listen(config.port, config.ipaddress);
console.log('Server listens on port: ' + config.port);
