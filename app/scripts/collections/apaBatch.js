/*global define*/

define([
    'underscore',
    'backbone',
    'models/apaBatch'
], function (_, Backbone, ApaBatchModel) {
    'use strict';

    var ApaBatchCollection = Backbone.Collection.extend({
    		url: 'http://reports.inetb.com/reports/apa-batch/',
        model: ApaBatchModel
    });

    return ApaBatchCollection;
});
