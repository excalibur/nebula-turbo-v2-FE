/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'templates',
    'config'
], function ($, _, Backbone, Handlebars, JST, config) {
    'use strict';

    var HeaderView = Backbone.View.extend({
        template: JST['app/scripts/templates/header.hbs'],

        tagName: 'header',

        id: '',

        className: 'navbar navbar-inverse',

        events: {},

        initialize: function () {
           
        },

        render: function () {
            this.$el.html(this.template({}));
        }
    });

    return HeaderView;
});
