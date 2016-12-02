window.onload = function() {
	var module1 = new(require("./modules/dataHandle.js"))();
	module1.getData("data.json", initData);

	var test = {
		test: "This is test"
	}
	var module2 = new(require("./modules/module2.js"))(test);
	console.log(module2.getConfig());
};

function initData(data) {
	if (!data) {
		return;
	}
	data = JSON.parse(data);
	console.log(data);
}