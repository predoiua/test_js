/*global Marionette*/
var Content = require('views/content');

module.exports = Marionette.Controller.extend({
  initialize: function (app) {
    this.app = app;
  },
  start: function () {
    this.app._layout.body.show(new Content());
  }
});