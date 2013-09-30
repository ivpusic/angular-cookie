module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-minified');

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 9001,
                    keepalive: true
                }
            }
        },
        minified : {
            files: {
                src: [
                    './angular-cookie.js'
                ],
                dest: './'
            },
            options : {
                allinone: false,
                ext: '.min.js'
            }
        }
    });

    grunt.registerTask('default', ['connect']);
    grunt.registerTask('build', ['minified']);
};
