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

    var app = config.app;

    var SidebarView = BaseView.extend({
        template: JST['app/scripts/templates/sidebar.hbs'],

        tagName: 'aside',

        id: 'page-sidebar',

        className: 'collapse navbar-collapse navbar-main-collapse',

        events: {
            "click .btn-theme-options": "themeSetting",
            "click .theme-colors a": "changeThemeColor",
            "click #primary-nav a": "linkTo"
        },
        init: function (options) {
     
        },
        render: function () {
            this.$el.html(this.template({}));
        },
        afterRender: function(){

            this.themeColors = this.$(".theme-colors");
            this.themeLink = $("#theme-link");
            var link = this.themeLink, themeColors = this.themeColors;
            var href;
            link.length && (href = link.attr("href"), $("li", themeColors).removeClass("active"), $('a[data-theme="' + href + '"]', themeColors).parent("li").addClass("active"));
            


            // 处理链接效果
            var a = this.$("#primary-nav > ul > li > a");

            a.filter(function() {
                return $(this).next().is("ul");
            }).each(function(a, e) {
                $(e).append("<span>" + $(e).next("ul").children().length + "</span>");
            });

           
        },
        themeSetting: function(ev){
            var $this = $(ev.target);
            $this.toggleClass("open");
            this.$("#theme-options-content").slideToggle(200);
        },
        changeThemeColor: function(ev){
            var $this = $(ev.target);

            var link = this.themeLink;
            var href;

        
            href = $this.data("theme");

            $("li", this.themeColors).removeClass("active");

            $this.parent("li").addClass("active");
                  
            "default" === href ? link.length && (link.remove(), this.themeLink = $("#theme-link")) : link.length ? link.attr("href", href) : ($('link[href="styles/main.css"]').after('<link id="theme-link" rel="stylesheet" href="' + href + '">'), this.themeLink = $("#theme-link"));
        },
        // 导航
        linkTo: function(ev){

            var a =  $(ev.target);

            // 判断是否二级级菜单
            a.next("ul").length > 0 ? (a.parent().hasClass("active") !== true && (a.hasClass("open") ? a.removeClass("open").next().slideUp(250) : ($("#primary-nav li > a.open").removeClass("open").next().slideUp(250), a.addClass("open").next().slideDown(250))), false) : true
            
            if(a.next("ul").length == 0){
                this.$("a", "#primary-nav").removeClass("active");
                
                var href = a.attr("href");
                a.addClass("active");

                app.workspace.navigate(href, {trigger: true});

            }
               

            // 跳转
            return false;
        }
    });

    return SidebarView;
});
