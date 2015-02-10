/*global define*/

define([
    'settings',
    'underscore',
    'backbone',
], function (Settings, _, Backbone) {
    'use strict';

    var ApaBatchModel = Backbone.Model.extend({
        urlRoot: Settings.urlRoot+'apabatch',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

    return ApaBatchModel;
});
