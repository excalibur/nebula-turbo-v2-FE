/*global define*/

define([
    'jquery',
    'backbone',
    'handlebars',
    'templates',
    'config'
], function ($, Backbone,  Handlebars, JST, config) {
    'use strict';

    var FooterView = Backbone.View.extend({
        template: JST['app/scripts/templates/footer.hbs'],

        tagName: 'footer',

        events: {},

        initialize: function () {
           
        },

        render: function () {
            this.$el.html(this.template({}));
        }
    });

    return FooterView;
});
