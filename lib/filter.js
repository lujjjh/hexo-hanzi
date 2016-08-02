var assign = require('object-assign');
var Han = require('node-han-css');
var Promise = require('bluebird');

var han = new Han();

module.exports = function (data) {
  return new Promise(function (resolve, reject) {
    han.ready(function () {
      resolve(assign(data, { content: this.render(data.content) }));
    });
  });
}
