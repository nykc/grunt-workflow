// grunt/config/copy.js

module.exports = {
  html: {
    cwd: 'app',
    src: '**/*.html',
    dest: 'build',
    expand: true
  },
  php: {
    cwd: 'app',
    src: '**/*.php',
    dest: 'build',
    expand: true
  },
  imgs: {
    cwd: 'build/imgs',
    src: '**/*',
    dest: 'dist/imgs/',
    expand: true
  },
  dist: {
    cwd: 'build',
    src: ['**/*.html', '**/*.php'],
    dest: 'dist',
    expand: true
  }
};
