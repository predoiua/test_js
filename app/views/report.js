/*global Backbone*/
var template = require('templates/report');

module.exports = Backbone.Marionette.ItemView.extend({
  template: template,
  triggers: {
    'click #report-submit' : 'user:details'
  },
  events:{
    'click #report-submit':'save'
  }
});