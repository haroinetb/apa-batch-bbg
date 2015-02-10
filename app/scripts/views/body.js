  /*global define*/

define([
  'jquery',
  'underscore',
  'marionette'
], function($, _, Marionette) {
  'use strict';

  var RootView = Marionette.LayoutView.extend({
    el: 'body',
    regions: {
	    header: '#header',
	    main: '#main',
	    footer: '#footer'
    },
  });
  return RootView;
});