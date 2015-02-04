/*global define*/

define([
  'jquery',
  'underscore',
  'marionette',
  'handlebars',
  'hbs!templates/header',
  'templates/helpers/get_app_name'
], function($, _, Marionette, Handlebars, TPL, get_app_name) {
  'use strict';

  var HeaderView = Marionette.ItemView.extend({
    template: TPL,
    templateHelpers: {
      get_app_name: function() {
        return get_app_name();
      }
    },
    tagName: 'div',

    id: '',

    className: '',

    events: {},

    initialize: function() {
      //this.listenTo(this.model, 'change', this.render);
    },

    render: function() {
      //this.$el.html(this.template(this.model.toJSON()));
      // console.log(Handlebars.compile(this.template));
      this.$el.html(this.template({test: 'testing', helpers: this.templateHelpers, get_app_name: get_app_name}));
    }
  });

  return HeaderView;
});
