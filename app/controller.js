/*global Marionette*/
var ContentView = require('views/content');
var HeaderView = require('views/header');

module.exports = Marionette.Controller.extend({
  initialize: function (app) {
    this.app = app;
  },
  start: function () {

    this.app._layout.body.show(new ContentView());
    var headerView = new HeaderView({model : this.app._userModel});
    this.app._layout.header.show(headerView);
    console.log(this.app.vent);

  }
});