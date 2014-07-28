/*global define*/

define([
    'jquery',
    'backbone'
], function ($, Backbone) {
    'use strict';

    var IndexRouter = Backbone.Router.extend({
        routes: {
        },
        initialize: function(){
        	console.log("aaaa");
        }



    });

    return IndexRouter;
});
