// grunt/config/watch.js

module.exports = {
  options: {
    livereload: true
  },
  js: {
    files: ['<%= concat.js.src %>'],
    tasks: ['newer:concat']
  },
  jade: {
    files: ['<%= files.jade.src %>'],
    tasks: ['jade']
  },
  css: {
    files: ['app/**/*.scss'],
    tasks: ['sass']
  },
  html: {
    files: ['<%= files.html.src %>'],
    tasks: ['newer:copy:html']
  },
  php: {
    files: ['<%= files.php.src %>'],
    tasks: ['newer:copy:php']
  }
};
