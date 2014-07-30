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
            console.log(this);
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
            
            this.$("a", "#primary-nav").removeClass("active");
            $(ev.target).addClass("active");

            // 跳转
            return false;
        }
    });

    return SidebarView;
});
