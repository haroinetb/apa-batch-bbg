/*global define*/

define([
    'settings',
    'backbone',
    'models/apaBatch'
], function (Settings, Backbone, ApaBatchModel) {
    'use strict';

    var ApaBatchCollection = Backbone.Collection.extend({
    		url: Settings.urlRoot+'apabatch',
				model: ApaBatchModel
    });

    return ApaBatchCollection;
});
