window.onload = function() {
	console.log("window loaded!");
	var module1 = new(require("module1"))();
	module1.sayHello();
	var test = {
		test: "This is test"
	}

	var module2 = new(require("module2"))(test);
	console.log(module2.getConfig());
};