/*global define */

define([
  'backbone',
  'marionette',
  'namespace',
  'routers/index',
  'controllers/index',
  'htaccess_auth',
  'views/body',
  'views/header',
  'views/main',
  'views/footer',
  'collections/apaBatch',
  'views/main/main_batch_rows_container',
], function(Backbone, Marionette, nameSpace, Router, Controller, Auth, Body, Header, Main, Footer, ApaBatchCollection, BatchRowsContainerView) {
  'use strict';
  var app = new Marionette.Application();

  nameSpace.collections.apaBatchCollection = new ApaBatchCollection();
  var body = new Body();
  var header = new Header();
  var main = new Main();
  var footer = new Footer();

  // app.listenTo(ApaBatchCollection, 'all', function() {

  // });


  app.on('start', function() {
    new Router({
      controller: Controller
    });
    Backbone.history.start();

    body.header.show(header);
    body.main.show(main);
    body.footer.show(footer);

    var batchList = new $.Deferred(); //deferred promise

    $.when(batchList).done(function(collection) {
      var batchRowsContainerView = new BatchRowsContainerView({collection: collection});
      main.batchRows.show(batchRowsContainerView);
    });

    nameSpace.collections.apaBatchCollection.fetch({
      beforeSend: Auth,
      data: {},
      success: function(collection) {
        batchList.resolve(collection);
      }
    });

  });

  app.start();

  return window.app = app;
});
