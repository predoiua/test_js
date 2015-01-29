var Model = require('/base/activeModel');

module.exports = Model.extend({
  urlPath : function () {
    return "/content";
  }
});