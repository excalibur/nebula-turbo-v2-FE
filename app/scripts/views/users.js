/*global define*/

define([
    'jquery',
    'backbone',
    'handlebars',
    './base',
    'templates',
    'config'
], function ($, Backbone, Handlebars, BaseView, JST, config) {
    'use strict';

    var UsersView = BaseView.extend({
        template: JST['app/scripts/templates/users.hbs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        init: function () {
            
        },

        render: function () {
            this.$el.html(this.template({}));
        }
    });

    return UsersView;
});
