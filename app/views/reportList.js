/*global $, Marionette, Backbone*/
var template = require('templates/reportList');

module.exports = Backbone.Marionette.ItemView.extend({
  template: template,
  modelEvents : {
    'change': 'render'
  },
  onRender : function () {
    // console.log("Report List on show, model=:");
    // console.log(this.model.toJSON());
    //Sample use of command pattern to display a message/warning
    var globalCh = Backbone.Wreqr.radio.channel('global');
    globalCh.commands.execute('show:message', 'please show this message');
  }
});