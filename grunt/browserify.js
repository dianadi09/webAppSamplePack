module.exports = {
	dev: {
		src: ['app/js/modules/*.js', 'app/js/*.js'],
		dest: 'app/js/vendor.js',
		options: {
			watch: true,
			keepAlive: true,
			alias: {
				module1: './app/js/modules/module1.js',
				module2: './app/js/modules/module2.js'
			}
		}
	},
	deploy: {
		src: ['app/js/modules/*.js', 'app/js/*.js'],
		dest: './build/js/vendor.js',
		options: {
			alias: {
				module1: './app/js/modules/module1.js',
				module2: './app/js/modules/module2.js'
			}
		}
	}
};