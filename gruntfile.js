'use strict';

module.exports = function(grunt) {

    grunt.initConfig({

      jshint: {
           options: {
               jshintrc: '.jshintrc',
               ignores: ['node_modules/**']
           },
           source: {
               files: {
                   src: ['javascript/**/*.js']
               }
           }
       },

       karma: { // task name
        options: {
        // These options apply to all of our TARGETS
        frameworks: [ 'mocha', 'chai' ],
        client: {
          mocha: {
            ui: 'bdd'
          }
        },
        browsers: ['Chrome'],
        singleRun: true,

        preprocessors: {
          'src/javascript/**/*.js': [ 'coverage' ]
        },

        reporters: [ 'dots', 'coverage' ],
        coverageReporter: {
          type: 'text-summary'
        }
      },

      registry: {
        options: {
          files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'src/javascript/shop.module.js',
            'src/javascript/shop.controller.js',
            'src/javascript/product.service.js',
            'test/specs/product.service.spec.js',
            'test/specs/shop.controller.spec.js'
          ]
        }
      }
    }

  });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', ['jshint', 'karma']);
};
