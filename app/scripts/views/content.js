/*global define*/

define([
    'jquery',
    'backbone',
    'handlebars',
    'templates',
    'config'
], function ($, Backbone, Handlebars, JST, config) {
    'use strict';

    var ContentView = Backbone.View.extend({
        template: JST['app/scripts/templates/content.hbs'],

        tagName: 'div',

        id: 'page-content',

        className: '',

        events: {},

        initialize: function () {
            
        },

        render: function () {
            this.$el.html(this.template({}));
        }
    });

    return ContentView;
});
