/*jslint browser: true*/
/*global $, Marionette, Backbone*/
var LayoutView = require('layoutView');
var Controller = require('controller');
var Router = require('router');
var UserModel  = require('/models/user');

module.exports =  Marionette.Application.extend({
  initialize : function () {
    var controller = new Controller(this);
    this._router = new Router({
      controller: controller
    });
    this._layout = new LayoutView();
    this._userModel = new UserModel();
    this._initUser(this._userModel);
  },
  onStart : function () {
    this._layout.render();
    Backbone.history.start();
  },
  // TODO: Load authenticated user info
  _initUser : function (user) {
    user.set('language', 'en');
    user.set('user', 'Ioana S');
    user.set('session_key', 'key1');
  }
});




