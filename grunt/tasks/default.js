// grunt/tasks/default.js

module.exports = function(grunt) {
  grunt.registerTask('default', [
    'sass:dev',
    'newer:jade',
    'newer:imagemin:dev',
    'jshint',
    'concat',
    'copy:html',
    'copy:php',
    'server',
    'watch'
  ]);
};
