var express = require('express');
var app = express();

app.listen('3000', function() {
	console.info('[PORT] 3000');
});

app.use('', express.static(__dirname));

app.use('/*', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

module.exports = app;