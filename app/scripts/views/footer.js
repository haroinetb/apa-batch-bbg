/*global define*/

define([
    'jquery',
    'underscore',
    'marionette',
    'handlebars',
    'hbs!templates/footer',
], function ($, _, Marionette, Handlebars, TPL) {
    'use strict';

    var View = Marionette.ItemView.extend({
        template: TPL,

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
        },
    });

    return View;
});
