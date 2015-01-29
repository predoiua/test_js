/*jslint browser: true*/
/*global $, Marionette, Backbone*/
module.exports =  Marionette.Application.extend({
  // TODO: Load authenticated user info
  _initUser : function (user) {
    user.set('language', 'en');
    user.set('user', 'Ioana S');
    user.set('session_key', 'key1');
  }
});