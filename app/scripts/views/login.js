// 登录页面控制
define([
    'jquery',
    'backbone',
    'handlebars',
    './base',
    'templates',
    'config',
    'helpers/form'
], function ($, Backbone, Handlebars, BaseView, JST, config) {
    'use strict';

    var app = config.app;
    var api = config.api;

    var LoginView = BaseView.extend({

        template: JST['app/scripts/templates/login.hbs'],

        tagName: 'div',

        className: 'login',

        events: {
            "click #login-form button[type='submit']": "login"
        },

        init: function () {
            
        },

        render: function () {
            // 注意缓存DOM操作
            $(document.body).addClass(this.className);
            this.$el.html(this.template({}));
            $("title").html("管理后台——登录");
        },
        login: function(ev){
            console.log("===========");
            var obj = this.$("#login-form").serializeObject();
            // TODO 提交数据到服务器
            
            console.log(obj);



            // TODO 登录后续处理
            // 设置token
            app.localStorage.setItem("token", "faith");
            app.workspace.navigate("", {trigger: true});
            // 防止页面直接提交
            return false;
        },
        remove: function(){

            $(document.body).removeClass(this.className);
            // 调用原始方法
            Backbone.View.prototype.remove.call(this);


        }
    });

    return LoginView;
});