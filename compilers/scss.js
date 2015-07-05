var
  Q = require("q"),
  deepmerge = require("deepmerge"),
  sass = require("node-sass");
module.exports = function compile(code, options) {
  var
    defer = Q.defer(),
    output = sass.renderSync(deepmerge(options.compiler.sass, {
      data: code
    }));
    result = "<style>\n" + output.css + "</style>";
  defer.resolve(result);
  return defer.promise;
};