module.exports = {
	dev: {
		options: {
			style: 'expanded',
			sourcemap: 'none'
		},
		files: { // Dictionary of files
			'app/css/style.css': 'app/css/style.scss'
		}
	},
	deploy: {
		options: {
			sourcemap: 'none'
		},
		files: [{
			expand: true,
			cwd: 'app',
			src: ['css/*.scss'],
			dest: 'build',
			ext: '.css'
		}]
	}
};