var Model = require('/base/activeModel');

module.exports = Model.extend({
  defaults : {
    user : '',
    session_key : '',
    language : '',
    language_list : [
      {'code' : 'en', 'name' : 'English'},
      {'code' : 'fr', 'name' : 'French'}
    ]
  }
});