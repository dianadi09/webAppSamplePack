module.exports = {
	dev: {
		src: ['app/js/modules/*.js', 'app/js/*.js'],
		dest: 'app/js/vendor.js',
		options: {
			watch: true,
			keepAlive: true
		}
	},
	deploy: {
		src: ['app/js/modules/*.js', 'app/js/*.js'],
		dest: './build/js/vendor.js'
	}
};