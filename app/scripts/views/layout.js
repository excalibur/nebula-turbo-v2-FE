// 负责页面轮廓渲染
define([
    'jquery',
    'backbone',
    'handlebars',
    'templates',
    'config',
    './header',
    './sidebar',
    './content',
    './footer'
], function ($, Backbone, Handlebars, JST, config, HeaderView, SidebarView, ContentView, FooterView) {
    'use strict';

    var LayoutView = Backbone.View.extend({
        template: JST['app/scripts/templates/layout.hbs'],

        header: new HeaderView(),

        sidebar: new SidebarView(),

        footer: new FooterView(),

        content: new ContentView(),

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
            this.sidebar.render();
            this.container.append(this.sidebar.el);

            // 渲染主体
            this.content.render();
            this.container.append(this.content.el);

            // 渲染footer
            this.footer.render();
            this.container.append(this.footer.el);
        }
    });

    return LayoutView;
});
