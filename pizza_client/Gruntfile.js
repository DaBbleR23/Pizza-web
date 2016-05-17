'use strict';

module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			files: [
				'app/index.html',
				'app/css/*.css',
				'app/js/*',
				'app/js/**/*'
			]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', ['watch']);

};