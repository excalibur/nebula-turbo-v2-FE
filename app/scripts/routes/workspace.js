// 全局路由配置
// 登录判断
// TODO 载入动画
// TODO 路由规划
define(['jquery', 'backbone', 'config'], function($, Backbone, config) {
    'use strict';

    var app = config.app;
    var WorkspaceRouter = Backbone.Router.extend({
        routes: {
            '': 'index',
            'login': 'login'
        },
        initialize: function() {
            
            
        },
        // 检测是否登录
        execute: function(callback, args){
            var token = app.localStorage.getItem("token");
            $("#loading").hide();

            if (app.view) {
                app.view.remove();
            };
            
            // 没有token让其导航到登录页面
            if (!token && callback != this.login) {
                app.workspace.navigate("/login", true);
                return;
            };

            callback.apply(this, args);
        },
        // 默认页面
        index: function(){
            require(['views/index'],function(IndexView){

                app.view = new IndexView();
                
                app.view.render();

                $(".page-container").html(app.view.el);
            });
        },
        // 登录页面
        login: function(){

            require(['views/login'],function(LoginView){

                app.view = new LoginView();
                
                app.view.render();

                $(".page-container").html(app.view.el);
            });
        }
    });
    return WorkspaceRouter;
});