var
  deepmerge = require("deepmerge"),
  hamljs = require('hamljs'),
  html = require("./html");
module.exports = function compile(code, options) {
  code = hamljs.render(code, options);
  return html(code, options);
};