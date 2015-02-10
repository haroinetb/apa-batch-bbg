/*global require*/
'use strict';

require.config({
  shim: {
    bootstrap: {
      deps: ['jquery'],
      exports: 'jquery'
    },
    underscore: {
      exports: '_'
    },
    backbone: {
      exports: 'Backbone',
      deps: ['jquery', 'underscore']
    },
    marionette: {
      deps: ['jquery', 'underscore', 'backbone'],
      exports: 'Marionette'
    },
    handlebars: {
      exports: 'Handlebars'
    }
  },
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    underscore: '../bower_components/lodash/dist/lodash',
    backbone: '../bower_components/backbone/backbone',
    bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
    marionette: '../bower_components/marionette/lib/backbone.marionette',
    wreqr: '../bower_components/backbone.wreqr/lib/backbone.wreqr',
    babysitter: '../bower_components/backbone.babysitter/lib/backbone.babysitter',
    handlebars: '../bower_components/handlebars/handlebars',
    hbs: '../bower_components/require-handlebars-plugin/hbs',
  },
  hbs: { // optional
    helpers: true, // default: true
    i18n: false, // default: false
    templateExtension: 'hbs', // default: 'hbs'
    partialsUrl: '' // default: ''
  }
});

require([
  'app'
], function(app) {

  return window.app = app;
});
