/*jslint browser: true*/
/*global $, Marionette, Backbone*/
var LayoutView = require('layoutView');

module.exports =  Marionette.Application.extend({
    initialize: function (options) {
        console.log('Initialize:' + options);
        this._layout = new LayoutView();
    },
    onStart: function () {
        this._layout.render();
        Backbone.history.start();
    }
});




