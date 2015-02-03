
var Model = require('/base/activeModel');

//http://www.nncron.ru/help/EN/working/cron-format.htm
module.exports = Model.extend({
  defaults : {
    name : '',
    code : '',
    scheduler : {
      time : {
        minute : '',
        hour : '',
        dayOfTheMonth : '',
        monthOfTheYear : '',
        dayOfTheWeek : '',
        year : ''
      }
    }
  },
  urlPath : function () {
    return '/reports/' + this.get('code') + '/details';
  }
});
