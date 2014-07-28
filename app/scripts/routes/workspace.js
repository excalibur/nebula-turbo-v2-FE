// 全局路由配置
// 登录判断
// TODO 载入动画
// TODO 路由规划
define([
    'jquery',
    'backbone',
    './index',
    './login'
], function ($, Backbone, index, login) {
    'use strict';

    var WorkspaceRouter = Backbone.Router.extend({
        routes: {
        	'': 'index',
        	'login': 'login'
        },
        initialize: function(){
        	// TODO 检测是否登录
        	
        },
        // 默认页面
        index: index,
        // 登录页面
        login: login
    });

    return WorkspaceRouter;
});
