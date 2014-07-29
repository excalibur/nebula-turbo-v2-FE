// 登录页面控制
define([
    'jquery',
    'backbone',
    'handlebars',
    'templates',
    'config',
    'helpers/form'
], function ($, Backbone, Handlebars, JST, config) {
    'use strict';

    var app = config.app;
    var api = config.api;

    var LoginView = Backbone.View.extend({

        template: JST['app/scripts/templates/login.hbs'],

        tagName: 'div',

        className: 'login',

        events: {
            "click #login-form button[type='submit']": "login"
        },

        initialize: function () {
            
        },

        render: function () {
            // 注意缓存DOM操作
            $(document.body).addClass(this.className);
            this.$el.html(this.template({}));
           
        },
        login: function(ev){
            console.log("===========");
            console.log(ev);
            var arr = this.$("#login-form").serializeObject();
            // TODO 提交数据到服务器
            
            



            // TODO 登录后续处理
            // 设置token
            app.localStorage.setItem("token", "faith");
            app.workspace.navigate("/", true);
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