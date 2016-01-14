// grunt/config/jshint.js

module.exports = {
  files: ['Gruntfile.js', 'grunt/**/*.js', 'app/scripts/*.js'],
  options: {
    // options here override JSHint defaults
    globals: {
      jQuery: true,
      console: true,
      module: true,
      document: true
    }
  }
};
