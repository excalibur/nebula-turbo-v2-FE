// jquery扩展 可以序列化出表单值
define(['jquery'], function($) {
    'use strict';

    // 一个表单采用一个Object对象存放值
    $.fn.serializeObject = function(){
	    var o = {};
	    var a = this.serializeArray();
	    $.each(a, function() {
	        if (o[this.name] !== undefined) {
	            if (!o[this.name].push) {
	                o[this.name] = [o[this.name]];
	            }
	            o[this.name].push(this.value || '');
	        } else {
	            o[this.name] = this.value || '';
	        }
	    });
    	return o;
	};

	return $;
});