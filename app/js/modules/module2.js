function module2(val) {
	var config = val || {};

	function sayHello() {
		console.log("Hi!I'm module2");
	}

	function getConfig() {
		return config;
	}

	var ret = {
		sayHello: sayHello,
		getConfig: getConfig
	}

	return ret;
}

module.exports = module2;