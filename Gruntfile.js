module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            js : {
                src : [
                    'js/controller.js','js/main_script.js'
                ],
                dest : 'js/whatisonnetflix.js'
            }
        },
        cssmin : {
            css:{
                src: 'css/stylesheet.css',
                dest: 'css/whatisonnetflix.min.css'
            }
        },
        uglify : {
            js: {
                files: {
                    'js/whatisonnetflix.js' : [ 'js/whatisonnetflix.js' ]
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', [ 'concat:css', 'cssmin:css', 'concat:js', 'uglify:js' ]);
};
