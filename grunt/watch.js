module.exports = {
	css: {
		files: 'app/css/*.scss',
		tasks: ['sass'],
		options: {
			interrupt: true,
		},
	},
	js: {
		files: 'app/js/**/*.js',
		tasks: ['jshint', 'browserify:dev'],
		options: {
			interrupt: true,
		},
	},
};