/*jslint browser: true*/
/*global $, Marionette, Backbone*/
var LayoutView = require('layoutView');
var Controller = require('controller');
var Router = require('router');

module.exports =  Marionette.Application.extend({
  initialize: function () {
    var controller = new Controller(this);
    this._router = new Router({
      controller: controller
    });
    this._layout = new LayoutView();
  },
  onStart: function () {
    this._layout.render();
    Backbone.history.start();
  }
});




