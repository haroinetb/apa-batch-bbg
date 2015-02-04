/*global define*/

define([
    'jquery',
    'underscore',
    'marionette',
    'handlebars'
], function ($, _, Marionette, Handlebars) {
    'use strict';

    var FooterView = Marionette.ItemView.extend({
        template: Handlebars.compile($('#template_footer').html()),

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            //this.$el.html(this.template(this.model.toJSON()));
            this.$el.html(this.template());
        }
    });

    return FooterView;
});
