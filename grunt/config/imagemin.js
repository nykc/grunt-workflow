// grunt/config/imagemin.js

module.exports = {
  dev: {
    options: {
      optimizationLevel: 5
    },
    files: [{
      expand: true,
      cwd: 'app/assets/imgs/',
      src: ['**/*.{png,jpg,jpeg,gif}'],
      dest: 'build/imgs/'
    }] 
  }
};
