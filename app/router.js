/*global Marionette*/
module.exports = Marionette.AppRouter.extend({
  appRoutes: {
    "": "start"
    ,":code/details":"report_details"
  }
});