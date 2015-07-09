var
  Q = require("q");
module.exports = function compile(code, options) {
  code = options.debug ? code : 'try { ' + code + '} catch (e) {}';
  var
    defer = Q.defer(),
    result = "<script>\n" + code + "\n</script>";
  defer.resolve(result);
  return defer.promise;
};