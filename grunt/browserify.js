module.exports = {
	dev: {
		src: ['app/js/modules/*.js', 'app/js/*.js'],
		dest: 'app/js/vendor.js',
		options: {
			alias: {
				module1: './app/js/modules/module1.js'
			}
		}
	},
	deploy: {
		src: ['app/js/modules/*.js', 'app/js/*.js'],
		dest: './build/js/vendor.js',
		options: {
			alias: {
				module1: './app/js/modules/module1.js'
			}
		}
	}
};