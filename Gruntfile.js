// Gruntfile.js

module.exports = function(grunt) {
  var path = require('path');

  require('time-grunt')(grunt);
  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'grunt/config'),
    jitGrunt: {
      customTasksDir: 'grunt/tasks'
    },
    data: {
      // meta data
      pkg: grunt.file.readJSON('package.json'),
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today(\'yyyy-mm-dd\') %>\n' +
        '<%= pkg.homepage ? \'* \' + pkg.homepage + \'\\n\' : \'\' %>' +
        '* Copyright (c) <%= grunt.template.today(\'yyyy\') %> <%= pkg.author %>; */' +
        '\n',
      files: {
        html: {
          src: 'app/*.html'
        },
        php: {
          src: 'app/**/*.php'
        },
        js: {
          vendor: 'bower_components/jquery/dist/jquery.js',
          src: 'app/scripts/main.js'
        },
        sass: {
          src: 'app/styles/main.scss'
        },
        jade: {
          src: 'app/views/**/*.jade'
        }
      },
      server: {
        base: 'build',
        web: {
          port: 8000
        }
      },
    }
  });
};
