// 全局路由配置
// 登录判断
// TODO 载入动画
// TODO 路由规划
define(['jquery', 'backbone', 'config', 'bootstrap'], function($, Backbone, config) {
    'use strict';

    var app = config.app;
    var WorkspaceRouter = Backbone.Router.extend({
        routes: {
            '': 'index',
            'login': 'login',
            "users": "users"
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
            if (!token) {
            	if (callback != this.login) {
            		app.workspace.navigate("/login", {trigger: true});
                	return;
            	}
                callback.apply(this, args);
                return;
            // 有token 访问登陆页时候 让其导航到主页
            }else{
            	if (callback == this.login ) {
            		app.workspace.navigate("", {trigger: true});
                	return;
            	};
            };

            if (!app.layout) {

                require(['views/layout'], function(LayoutView){
                    app.layout = new LayoutView();

                    app.layout.render();

                    callback.apply(this, args);
                });
            }else{
                callback.apply(this, args);
            }
            
            
        
        },
        // 默认页面
        index: function(){

            require(['views/dashboard'],function(DashboardView){

                app.view = new DashboardView();

                app.layout.changeContent(app.view);

            });

           
        },
        // 登录页面
        login: function(){
 
            require(['views/login'],function(LoginView){

                app.view = new LoginView();
                
                app.view.render();

                $(".page-container").html(app.view.el);
            });
        },
        users: function(){
            require(['views/users'],function(UsersView){

                app.view = new UsersView();
                
                app.layout.changeContent(app.view);

            });
        }
    });
    return WorkspaceRouter;
});