module.exports = {
	css: {
		files: 'app/css/*.scss',
		tasks: ['sass:dev'],
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