/*jslint browser: true*/
/*global $, Marionette, Backbone*/
var template = require('/templates/main');

module.exports =  Marionette.LayoutView.extend({
  el: 'body',
  template: template,

  regions: {
    header: "#header-container",
    body: "#body-container",
    footer: "#footer-container"
  }
});
