/*global Marionette,Backbone */
var ReportListView = require('views/reportList');
var ContentModel = require('models/content');
var HeaderView = require('views/header');
var UserView = require('views/userView');

module.exports = Marionette.Controller.extend({
  initialize: function (app) {
    this._layout = app._layout;
    this._data = app._data;
    this.globalCh = Backbone.Wreqr.radio.channel('global');
    this.globalCh.commands.setHandler('show:message', function (message) {
      console.log(' I need to display the following message : ' + message);
    });
  },
  start: function () {
    this._layout.body.show(this._buildReportListView());
    this._layout.header.show(this._buildHeaderView());
  },
  report_details: function (code) {
    console.log("Show report detail for:" + code);
  },
  _buildHeaderView: function () {
    var headerView = new HeaderView({model : this._data.userModel});
    var t = this;
    headerView.on('user:details', function () { //args) {
      t._layout.body.show(t._buildUserDetails());
    });
    return headerView;
  },
  _buildReportListView: function () {
    var contentModel = new ContentModel();
    var repListView = new ReportListView({model : contentModel});
    contentModel.fetch();
    return repListView;
  },
  _buildUserDetails: function () {
    var userView = new UserView({model : this._data.userModel});
    var t = this;
    userView.on('user:change', function () { //args) {
      t._layout.body.show(t._buildReportListView());
    });
    return userView;
  },
  _buildReportDetailsView: function () {
    console.log("_buildReportDetailsView");
  }
});