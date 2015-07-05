var
  Q = require("q");
module.exports = function compile(code, options) {
  var
    defer = Q.defer(),
    result = "\n<script>" + code + "\n</script>\n";
  defer.resolve(result);
  return defer.promise;
};