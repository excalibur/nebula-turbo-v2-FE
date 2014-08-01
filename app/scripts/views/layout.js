// 负责页面轮廓渲染
define([
    'jquery',
    'backbone',
    'handlebars',
    'templates',
    'config',
    './header',
    './sidebar',
    './footer'
], function ($, Backbone, Handlebars, JST, config, HeaderView, SidebarView, FooterView) {
    'use strict';

    var LayoutView = Backbone.View.extend({
        template: JST['app/scripts/templates/layout.hbs'],

        header: new HeaderView(),

        sidebar: new SidebarView(),

        footer: new FooterView(),

        el: '.page-container',

        events: {},

        initialize: function () {
           
        },

        render: function () {
            this.$el.html(this.template({}));
            this.container = this.$("#inner-container");

            // 渲染头部
            this.header.render();
            this.$el.prepend(this.header.el);

            // 渲染导航
            this.container.append(this.sidebar.render().el);

            // 渲染主体
            this.content = $("<div id=\"page-content\"></div>");
            this.container.append(this.content);

            // 渲染footer
            this.footer.render();
            this.container.append(this.footer.el);

            // 默认的初始
            $('[data-toggle="tooltip"]').tooltip({
                container: "body",
                animation: false
            });

            $('[data-toggle="popover"]').popover({
                container: "body",
                animation: false
            });
        },

        changeContent: function(view){
            this.content.html(view.render().el);
        }
    });

    return LayoutView;
});
