module.exports = function(grunt) {

grunt.loadNpmTasks('grunt-war');
 
grunt.initConfig({
 
/*
 * Build a WAR (web archive) without Maven or the JVM installed.
 */
      war: {
        target: {
          options: {
            war_dist_folder: './build',
            war_name: 'benka-test',
            webxml_welcome: 'index.html',
            webxml_display_name: 'Web Magic',
            webxml_mime_mapping: [ 
    { 
      extension: 'woff', 
        mime_type: 'application/font-woff' 
    } ]
          },
          files: [
            {
              expand: true,
              cwd: './build',
              src: ['**'],
              dest: ''
            }
          ]
        }
      }
});

//grunt.registerTask('default', ['grunt-war']);

};
