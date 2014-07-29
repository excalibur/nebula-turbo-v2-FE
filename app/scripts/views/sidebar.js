/*global define*/

define([
    'jquery',
    'backbone',
    'handlebars',
    'templates',
    'config'
], function ($, Backbone, Handlebars, JST, config) {
    'use strict';

    var SidebarView = Backbone.View.extend({
        template: JST['app/scripts/templates/sidebar.hbs'],

        tagName: 'aside',

        id: 'page-sidebar',

        className: 'collapse navbar-collapse navbar-main-collapse',

        events: {},

        initialize: function () {
            
        },

        render: function () {
            this.$el.html(this.template({}));
        }
    });

    return SidebarView;
});
