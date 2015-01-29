/*global $, Marionette, Backbone*/
var template = require('/templates/user');

module.exports = Backbone.Marionette.ItemView.extend({
  template: template,
  events: {
    'click #submit' : 'submit_form'
  },
  triggers: {
    'click #submit' : 'user:change'
  },
  submit_form: function () {
    var lang = $('#language').val();
    if (lang !== this.model.get('language')) {
      $.i18n.setLng(lang, function () {
        $('body').i18n();
      });
      this.model.set('language', lang);
    }
    this.model.set('user', $('#user').prop('value'));
    this.model.set('schema_code', $('#schema_code').prop('value'));
    this.model.set('session_key', $('#session_key').prop('value'));

    return false;
  }
});
