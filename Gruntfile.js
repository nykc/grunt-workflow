module.exports = function(grunt) {

  // initialize task configuration
  grunt.initConfig({

    // meta data
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today(\'yyyy-mm-dd\') %>\n' +
      '<%= pkg.homepage ? \'* \' + pkg.homepage + \'\\n\' : \'\' %>' +
      '* Copyright (c) <%= grunt.template.today(\'yyyy\') %> <%= pkg.author %>; */' +
      '\n',

    // files tasks will use
    files: {
      html: {
        src: 'app/*.html'
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

    // task configuration
    concat: {
      js: {
        dest: 'build/js/main.js',
        src: [
          '<%= files.js.vendor %>',
          '<%= files.js.src %>'
        ]
      }
    },

    copy: {
      html: {
        cwd: 'app',
        src: '**/*.html',
        dest: 'build',
        expand: true
      }
    },

    sass: {
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
    },

    jade: {
      compile: {
        options: {
          pretty: true
        },
        files: [{
          cwd: 'app/views',
          src: ['**/*.jade', '!templates/*.jade'],
          dest: 'app/',
          expand: 'true',
          ext: '.html'
        }]
      }
    },

    watch: {
      options: {
      },
      js: {
        files: ['<%= concat.js.src %>'],
        tasks: ['concat']
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
        tasks: ['copy:html']
      }
    },

    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.js.dest %>',
        dest: 'dist/js/main.min.js'
      }
    },

    clean: {
      workspaces: ['dist', 'build']
    }

  });

  // load local tasks
  require('load-grunt-tasks')(grunt);

  // create workflows
  grunt.registerTask('default', ['sass:dev', 'jade', 'concat', 'copy', 'watch']);
  grunt.registerTask('build', ['clean', 'sass:dist', 'concat', 'uglify', 'copy']);

};
