// grunt/config/concat.js

module.exports = {
  js: {
    dest: 'build/js/main.js',
    src: [
      '<%= files.js.vendor %>',
      '<%= files.js.src %>'
    ]
  }
};
