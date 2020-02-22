const Han = require('node-han-css');

const han = new Han();

module.exports = data => {
  data.content = han.render(data.content)
  return data;
};
