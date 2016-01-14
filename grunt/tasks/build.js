// grunt/tasks/build.js

module.exports = function(grunt) {
  grunt.registerTask('build', [
    'clean',
    'sass:dist',
    'imagemin',
    'jshint',
    'concat',
    'uglify',
    'copy'
  ]);
};
