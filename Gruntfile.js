module.exports = function(grunt) {
	// measures the time each task takes
	require('time-grunt')(grunt);
	// load grunt config
	require('load-grunt-config')(grunt);
	// By default, lint and run all tests.
	grunt.registerTask('default', ['jshint']);
	//dev task - for local debug
	grunt.registerTask('dev', ['watch', 'browserify:dev']);

	grunt.registerTask('deploy', ['sass:deploy', 'browserify:deploy', 'copy']);
};