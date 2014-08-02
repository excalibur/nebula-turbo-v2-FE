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

    var DashboardView = BaseView.extend({
        template: JST['app/scripts/templates/dashboard.hbs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        init: function () {
            
        },

        render: function () {
            this.$el.html(this.template({}));
            $("title").html("管理后台——控制面板");
        }
    });

    return DashboardView;
});
