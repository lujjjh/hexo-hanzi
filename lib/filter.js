var assign = require('object-assign');
var Han = require('node-han-css');

var han = new Han();

module.exports = function (data) {
  return han.ready()
    .then(function () {
      return assign(data, { content: han.render(data.content) });
    });
};
