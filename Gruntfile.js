module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    'gh-pages': {
      options: {
        base: 'dist'
      },
      src: '**/*'
    },

    'useminPrepare': {
      html: 'dist/*.html'
    },

    usemin: {
      html: 'dist/*.html'
    }
    
  });

  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-filerev');

  // simple build task
  grunt.registerTask('build', [
    'useminPrepare:html',
    'concat:generated',
    'cssmin:generated',
    'uglify:generated',
    'usemin:html'
  ]);

};