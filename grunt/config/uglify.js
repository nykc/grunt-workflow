// grunt/config/uglify.js

module.exports = {
  options: {
    banner: '<%= banner %>'
  },
  dist: {
    src: '<%= concat.js.dest %>',
    dest: 'dist/js/main.min.js'
  }
};
