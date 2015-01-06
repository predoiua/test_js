// Jquery will call this fct after the DOM is rdy
$(function () {
    console.log("DOM was loaded.. let's start the app.");
    var App = require('application');
    var app = new App();
    app.start();
});