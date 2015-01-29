/*global $, Marionette, Backbone*/
// Jquery will call this fct after the DOM is rdy
$(function () {
  $.i18n.init({
    lng: 'en',
    ns: { namespaces: ['ns.special'], defaultNs: 'ns.special'},
    useLocalStorage: false,
    debug: false,
    getAsync: false,
    fallbackLng: 'en'
  }, function () { return; });

//  console.log("DOM was loaded.. let's start the app.");
  var App = require('application');
  var LayoutView = require('layoutView');
  var Controller = require('controller');
  var Router = require('router');
  var UserModel = require('models/user');

  var app = new App();
  app.on('before:start', function () {
    //App Status
    this._data = {};
    this._data.userModel = new UserModel();
    this._initUser(this._data.userModel);

    //App Layout
    this._layout = new LayoutView();

    //App Controller
    var controller = new Controller(this);
    this._router = new Router({
      controller: controller
    });
  });
  app.on('start', function () {
    this._layout.render();
    Backbone.history.start();
  });
  app.start();
});