
var mod1 = require('./mod1.js');
var mod2 = require('./mod2.js');

function dollarAmount() {
	var randomNumber = mod1.random(100, 1000000);
	return mod2.intToDollar(randomNumber);
}

function amountText() {
	return "Account balance: \n";
}

module.exports = {
    dollarAmount: dollarAmount,
    amountText: amountText
}