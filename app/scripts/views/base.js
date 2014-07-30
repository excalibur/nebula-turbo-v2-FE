// 基础页面
// 所有页面继承
define([
    'jquery',
    'backbone',
    'handlebars'
], function ($, Backbone, Handlebars) {
    'use strict';

    var BaseView = Backbone.View.extend({
        

        // 初始化事件
        // 渲染增加beforeRender和afterRender
        initialize: function (options) {

            _.bindAll(this, 'beforeRender', 'render', 'afterRender'); 
            var _this = this; 
            this.render = _.wrap(this.render, function(render) { 
              _this.beforeRender(); 
              render(); 
              _this.afterRender(); 
              return _this; 
            }); 

            this.init(options);
        },
        init:function(options){

        },
        beforeRender: function(){
        },
        render: function () {
            this.$el.html(this.template({}));
        },
        afterRender: function(){

        }
    });


    return BaseView;
});
