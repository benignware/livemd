var
  Q = require("q"),
  coffescript = require("coffee-script"),
  js = require('./js');
module.exports = function compile(code, options) {
  var
    defer = Q.defer(),
    code = coffescript.compile(code);
  return js(code, options);
};