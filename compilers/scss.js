var
  Q = require("q"),
  deepmerge = require("deepmerge"),
  sass = require("node-sass"),
  css = require("./css");
module.exports = function compile(code, options) {
  var
    defer = Q.defer(),
    output = sass.renderSync(deepmerge(options.compiler.sass, {
      data: code
    }));
    css(output.css.toString(), options).done(function(result) {
      defer.resolve(result);
    });
  defer.resolve(result);
  return defer.promise;
};