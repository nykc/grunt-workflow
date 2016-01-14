// grunt/config/jade.js

module.exports = {
  compile: {
    options: {
      pretty: true
    },
    files: [{
      cwd: 'app/views',
      src: ['**/*.jade', '!templates/*.jade', '!includes/*.jade'],
      dest: 'app/',
      expand: 'true',
      ext: '.html'
    }]
  }
};
