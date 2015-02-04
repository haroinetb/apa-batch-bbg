/*global define */

define([
  'marionette',
  'collections/apaBatch',
  'views/header',
  'views/main',
  //'views/TodoListCompositeView',
  'views/footer'
], function(Marionette,ApaBatchCollection, Header, Main, Footer) {
  'use strict';

  var app = new Marionette.Application();
  var apaBatchCollection = new ApaBatchCollection();

  // var viewOptions = {
  //   collection: todoList
  // };

  var header = new Header();
  var main = new Main();
  // var main = new TodoListCompositeView(viewOptions);
  var footer = new Footer();

  app.addRegions({
    header: '#header',
    main: '#main',
    footer: '#footer'
  });


  app.addInitializer(function() {
    app.header.show(header);
    app.main.show(main);
    app.footer.show(footer);
    apaBatchCollection.fetch();
  });

  // app.listenTo(todoList, 'all', function() {
  //   app.main.$el.toggle(todoList.length > 0);
  //   app.footer.$el.toggle(todoList.length > 0);
  // });

  // app.vent.on('todoList:filter', function(filter) {
  //   footer.updateFilterSelection(filter);

  //   document.getElementById('todoapp').className = 'filter-' + (filter === '' ? 'all' : filter);
  // });

  // app.vent.on('todoList:clear:completed', function() {
  //   todoList.getCompleted().forEach(function(todo) {
  //     todo.destroy();
  //   });
  // });

  return window.app = app;
});
