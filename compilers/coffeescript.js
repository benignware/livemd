var
  Q = require("q"),
  coffescript = require("coffee-script");
module.exports = function compile(code, options) {
  var
    defer = Q.defer(),
    code = coffescript.compile(code),
    result = "<script>\n" + code + "</script>";
  defer.resolve(result);
  return defer.promise;
};