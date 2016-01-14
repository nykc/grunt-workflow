// grunt/config/sass.js

module.exports = {
  dev: {
    options: {
      style: 'expanded'
    },
    files: {
      'build/css/main.css' : '<%= files.sass.src %>'
    }
  },
  dist: {
    options: {
      style: 'compressed'
    },
    files: {
      'dist/css/main.min.css' : '<%= files.sass.src %>'
    }
  }
};
