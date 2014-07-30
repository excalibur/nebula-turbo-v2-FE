// 页脚处理
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
            this.$el.html(this.template({
                projectName: "nebula-turbo-v2-FE",
                projectUrl: "https://github.com/excalibur/nebula-turbo-v2-FE",
                authorName: "欧阳澄泓",
                authorUrl: "http://leeln.com/"

            }));

            // 处理日期
            var now = new Date();
            this.$("#year-copy").html(now.getFullYear() === 2014 ? "2014" : "2014-" + now.getFullYear().toString().substr(2, 2));
        }
    });

    return FooterView;
});
