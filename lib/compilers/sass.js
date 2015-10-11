var
  scss = require("./scss");
module.exports = function compile(code, options) {
  return scss(code, options);
};