
module.exports = function (grunt) {

    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        cssmin: {
            base: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> */\n',
                    relativeTo: './',
                    root: './'
                },
                files: {
                    'public_html/libs/css/default.min.css': [
                        'bower_components/bootstrap/dist/css/bootstrap.css',
                        //'bower_components/bootswatch/slate/bootstrap.css',

                        'bower_components/animate.css/animate.css',
                        'bower_components/bootstrap3-wysihtml5-bower/dist/bootstrap3-wysihtml5.min.css',
                        'bower_components/bootstrap-select/dist/css/bootstrap-select.css',
                        'bower_components/bootstrap-social/bootstrap-social.css',
                        'bower_components/bootstrap-table/dist/bootstrap-table.min.css',
                        'bower_components/bootstrap-toggle/css/bootstrap-toggle.css',
                        'bower_components/bootstrap-select/dist/css/bootstrap-select.css',
                        'bower_components/chosen/chosen.css',
                        'bower_components/chosen-bootstrap/chosen.bootstrap.css',
                        'bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css',
                        'bower_components/font-awesome/css/font-awesome.css',
                        'bower_components/jasny-bootstrap/dist/css/jasny-bootstrap.min.css'
                    ]
                }
            }
        }, // END cssmin
        copy: {
            main : {
                files : [
                    {expand: true, flatten: true, src: ['bower_components/font-awesome/fonts/*'], dest: 'public_html/libs/fonts/', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['bower_components/bootstrap/fonts/*'], dest: 'public_html/libs/fonts/', filter: 'isFile'},
                    {expand: true, cwd: 'bower_components/ckeditor', src: ['**'], dest: 'public_html/libs/ckeditor'},
                    {expand: true, cwd: 'bower_components/chosen-bootstrap', src: ['*.png'], dest: 'public_html/libs/css'}
                ]
            }
        }, // END copy
        concat: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> */\n',
                separator: ';'
            },
            default: {
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/bootstrap/dist/js/bootstrap.js',
                    'bower_components/jasny-bootstrap/dist/js/jasny-bootstrap.js',
                    'bower_components/underscore/underscore.js',
                    'bower_components/backbone/backbone.js',
                    'bower_components/underscore.string/dist/underscore.string.js',
                    'bower_components/async/dist/async.js',
                    'bower_components/moment/moment.js',
                    'bower_components/moment/locale/de.js',
                    'bower_components/validator-js/validator.js',
                    'bower_components/bootstrap3-wysihtml5-bower/dist/bootstrap3-wysihtml5.all.js',
                    'bower_components/bootstrap3-wysihtml5-bower/dist/locales/bootstrap-wysihtml5.de-DE.js',
                    'bower_components/bootstrap-table/dist/bootstrap-table.js',
                    'bower_components/bootstrap-table/dist/locale/bootstrap-table-de-DE.js',
                    'bower_components/bootstrap-toggle/js/bootstrap-toggle.js',
                    'bower_components/bootstrap-select/dist/js/bootstrap-select.js',
                    'bower_components/bootstrap-select/dist/js/i18n/defaults-de_DE.js',
                    'bower_components/chosen/chosen.jquery.js',
                    'bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
                    'bower_components/localforage/dist/localforage.js'
                ],
                dest: 'public_html/libs/js/default.js'
            }
        }, // END concat
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> */\n'
            },
            default: {
                src: 'public_html/libs/js/default.js',
                dest: 'public_html/libs/js/default.min.js'
            }
        }, // END uglify
        jshint: {
            files: ['public_html/js/*.js'],
            options: {
                globals: {
                    "curly": true,
                    "eqnull": true,
                    "eqeqeq": true,
                    "undef": true,
                    "browser": true,
                    "globals": {
                        "jQuery": true,
                        "_" : true,
                        "console": true,
                        "module": true,
                        "document": true
                    }
                }
            }
        },  // END jshint
        clean : {
            ckeditor_samples : ['public_html/libs/ckeditor/samples']

        }, // END clean
        watch : {
            scripts: {
                files: ['public_html/js/off/*', 'public_html/js/routes/*'],
                tasks: ['concat', 'uglify']
            }
        }, // END watch
        connect: {
            server : {
                options: {
                    port: 9000,
                    //keepalive: true,
                    //debug: true
                }
            }
        }, // END connect
        qunit: {
            all: {
                options: {
                    urls: [
                        'http://localhost:9000/test/index.html'
                    ]
                }
            }
        },// END qunit
        bump: {
            options: {
                files: ['package.json', 'bower.json'],
                commit: false,
                push: false,
                createTag: false
            }
        },// END bump
        zip: {
            app : {
                cwd : './public_html',
                dest : './application.zip',
                src: './public_html/*'
            }
        }// END zip


    }); // END grunt.initConfig

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-zip');

    grunt.registerTask('run', ['connect', 'watch']);

    grunt.registerTask('build', [ 'cssmin', 'copy', 'concat', 'uglify', 'jshint', 'clean' , 'zip' ]);

    grunt.registerTask('default', [ 'cssmin', 'copy', 'concat', 'uglify', 'jshint', 'clean' ]);

};