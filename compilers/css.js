var
  cheerio = require("cheerio"),
  css_wrap = require("css-wrap"),
  Q = require("q");
module.exports = function compile(code, options) {
  var
    defer = Q.defer();
    $ = cheerio.load(options.wrap),
    $el = $.root().find('*:not(:has(*))'),
    selectors = [],
    output = "";
  while ($el.length) {
    selectors.push($el[0].name + ($el.attr('id') ? "#" + $el.attr('id') : "") + ($el.attr('class') ? "." + $el.attr('class') : ""));
    $el = $el.parent();
  }
  output = css_wrap(code, {
    selector: selectors.join(" > ")
  });
  result = "<style>\n" + output + "\n</style>";
  defer.resolve(result);
  return defer.promise;
};