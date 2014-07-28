/**
 * require 全局配置以及main入口
 */
'use strict';
require.config({
  shim: {
    bootstrap: {
      deps: [
        'jquery'
      ],
      exports: 'jquery'
    },
    backbone: {
      deps: [
        'lodash'
      ],
      exports: '_'
    },
    handlebars: {
        exports: 'Handlebars'
    }
  },
  paths: {
    'Font-Awesome': '../bower_components/Font-Awesome/fonts/*',
    backbone: '../bower_components/backbone/backbone',
    bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
    'bootstrap-datepicker': '../bower_components/bootstrap-datepicker/js/bootstrap-datepicker',
    'bootstrap-daterangepicker': '../bower_components/bootstrap-daterangepicker/daterangepicker',
    'bootstrap-wysihtml5': '../bower_components/bootstrap-wysihtml5/src/bootstrap-wysihtml5',
    datatables: '../bower_components/datatables/media/js/jquery.dataTables',
    fullcalendar: '../bower_components/fullcalendar/dist/fullcalendar',
    iCheck: '../bower_components/iCheck/icheck.min',
    jquery: '../bower_components/jquery/dist/jquery',
    lodash: '../bower_components/lodash/dist/lodash.compat',
    modernizr: '../bower_components/modernizr/modernizr',
    requirejs: '../bower_components/requirejs/require',
    'requirejs-text': '../bower_components/requirejs-text/text',
    'responsive-nav': '../bower_components/responsive-nav/responsive-nav',
    moment: '../bower_components/moment/moment',
    underscore: '../bower_components/underscore/underscore',
    flot: '../bower_components/flot/jquery.flot',
    handlebars: '../bower_components/handlebars/handlebars'
  },
  packages: [

  ]
});

require([
    'backbone',
    'routes/index'
], function (Backbone, IndexRouter) {
    new IndexRouter();

    // 采用HTML5的pushState
    Backbone.history.start({pushState: true});
});