/*global define*/

define([
      'jquery',
      'marionette'
    ], function($, Marionette) {
      'use strict';

      return Marionette.AppRouter.extend({
        appRoutes: {
          '*filter': 'setFilter'
        }
      });
    });
