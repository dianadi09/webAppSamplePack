module.exports = {
	main: {
		files: [
			// makes all src relative to cwd
			{
				expand: true,
				cwd: 'app/',
				src: ['index.html'],
				dest: 'build/'
			},
		],
	}
};