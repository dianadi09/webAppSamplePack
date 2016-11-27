module.exports = {
	css: {
		files: 'app/css/*.scss',
		tasks: ['sass:dev'],
		options: {
			interrupt: true,
		},
	}
};