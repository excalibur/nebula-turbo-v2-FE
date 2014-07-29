/*global define*/

define([
    'jquery',
    'backbone',
    'handlebars',
    'templates',
    'config'
], function ($, Backbone, Handlebars, JST, config) {
    'use strict';

    var IndexView = Backbone.View.extend({
        template: JST['app/scripts/templates/index.hbs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
           
        },

        render: function () {
            this.$el.html(this.template({}));
        }
    });

    return IndexView;
});
