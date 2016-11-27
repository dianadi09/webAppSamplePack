function module1() {
	function sayHello() {
		console.log("Hi!I'm module1");
	}

	var ret = {
		sayHello: sayHello
	}

	return ret;
}

module.exports = module1;