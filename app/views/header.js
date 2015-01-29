/*global $, Marionette, Backbone*/
var template = require('templates/header');

module.exports = Backbone.Marionette.ItemView.extend({
  template: template,
  triggers: {
    'click #user-name' : 'user:details'
  }
});