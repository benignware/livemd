var
  Q = require("q"),
  deepmerge = require("deepmerge"),
  less = require("less");
module.exports = function compile(code, options) {
  var
    defer = Q.defer();
  less.render(code, options.compiler.less, function (e, output) {
    result = "<style>\n" + output.css + "</style>";
    defer.resolve(result);
  });
  return defer.promise;
};