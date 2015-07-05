var
  Q = require("q");
module.exports = function compile(code, options) {
  var
    defer = Q.defer(),
    result = "\n<style>" + code + "\n</style>\n";
  defer.resolve(result);
  return defer.promise;
};