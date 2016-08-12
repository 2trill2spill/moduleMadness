var express = require('express');
var app = express();

var mod = require('./mod3');

app.get("/", function(req, res) {
	res.status(200);
	var outString = mod.amountText() + mod.dollarAmount();
	console.log(outString);
	res.write(outString, function(err) {
		res.end();
	});
});

app.listen(3000, function () {
  console.log('Server started on port 3000');
});
