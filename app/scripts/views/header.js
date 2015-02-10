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
  });

  return HeaderView;
});
