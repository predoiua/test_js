/*global $, Marionette, Backbone*/
var config = require('config');

module.exports = Backbone.Model.extend({
  signRequest : function (str) {
    //return application.signRequest(str)
    return str;
  },
  apiRoot : config.api.versionRoot,
  urlPath: function () {
    return;
  },
  urlRoot: function () {
    return this.apiRoot + this.urlPath();
  },
  url: function (data) {
    data = typeof data !== 'undefined' ? data : ''; // default value = ''
    var base = this.urlRoot();
    return this.signRequest(base + data);
  },
  //do not override
  initialize : function () {
    _.bindAll(this, 'fetch_success');
    this.bind('change', this.fetch_success);
    this.init();
  },
  generalError : function (statusCode, message) {
    console.log(statusCode + ':' + message);
    // application.spinView.model.set('message', 'Error '+statusCode+' : '+ message);
    // application.spinView.model.set('error', 1);
    // application.spinView.show();
  },
  //for initialization override this method
  init: function () {
    return;
  },
  //override this to process the data that came from the server
  fetch_success: function () {
    return;
  }
});
