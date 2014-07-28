// 全局变量设置
// 浏览器功能检测
define(['modernizr'], function () {
    'use strict';
    console.log(Modernizr);
    

    if (!Modernizr.localstorage) {
    	// TODO 提示不支持localstorage功能
    };

    var config = {
    	app:{
    		workspace: null
    	}
    }
    return config;
});