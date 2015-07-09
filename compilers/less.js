var
  Q = require("q"),
  deepmerge = require("deepmerge"),
  less = require("less"),
  css = require("./css");
module.exports = function compile(code, options) {
  var
    defer = Q.defer();
  less.render(code, options.compiler.less, function (e, output) {
    css(output.css.toString(), options).done(function(result) {
      defer.resolve(result);
    });
  });
  return defer.promise;
};