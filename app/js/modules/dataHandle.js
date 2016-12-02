function dataHandle() {
	function getData(url, callback) {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (xhr.readyState == XMLHttpRequest.DONE) {
				if (typeof callback == "function") {
					callback(xhr.responseText);
				}
			}
		}
		xhr.open('GET', url, true);
		xhr.send(null);
	}

	var ret = {
		getData: getData
	}

	return ret;
}

module.exports = dataHandle;