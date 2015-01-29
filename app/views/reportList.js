/*global $, Marionette, Backbone*/
var template = require('templates/reportList');

module.exports = Backbone.Marionette.ItemView.extend({
  template: template,
  modelEvents : {
    'change': 'render'
  },
  onRender : function () {
    console.log("Report List on show, model=:");
    console.log(this.model.toJSON());
  }
});