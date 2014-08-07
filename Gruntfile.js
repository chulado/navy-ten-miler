module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    'gh-pages': {
      options: {
        base: 'tmp/dist'
      },
      src: '**/*'
    }
    
  });

  grunt.loadNpmTasks('grunt-gh-pages');

};