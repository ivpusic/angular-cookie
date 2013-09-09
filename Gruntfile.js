module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.initConfig({
      connect: {
        server: {
          options: {
            port: 9001,
            keepalive: true
          }
        }
      }
    });

    grunt.registerTask('default', ['connect']);

};
