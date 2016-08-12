
function intToDollar(int) {
	var amount = int.toFixed(2);
	return "$" + amount;
}

module.exports =  {
	intToDollar: intToDollar
};