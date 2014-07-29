// 全局变量设置
// 浏览器功能检测
define(['modernizr'], function () {
    'use strict';

    if (!Modernizr.localstorage) {
    	// TODO 提示不支持localstorage功能
    };

    var config = {
        // 主要是程序的一些全局变量
    	app: {
    		workspace: null,
            localStorage: window.localStorage,
            view: null
    	},
        // 与后端交互接口
        api: {
            login: "",
            qqLogin: "",
            sinaLogin: ""
        }
    }
    return config;
});