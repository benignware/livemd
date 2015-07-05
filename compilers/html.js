var
  path = require("path"),
  deepmerge = require("deepmerge"),
  cheerio = require("cheerio"),
  Q = require("q");
module.exports = function compile(code, options) {
  var
    defer = Q.defer(),
    result = "\n<div>" + code + "\n</div>\n";
  $ = cheerio.load(result);
  if (options.wrap) {
    var $el = $('div').first();
    var metaSelector = 'link,script,style,meta';
    var all = $el.find('*');
    var meta = $el.find(metaSelector);
    if (meta.length < all.length) {
      $ = cheerio.load(options.wrap);
      $.root().find('*:not(:has(*))').append("\n" + code + "\n");
      result = $.root().html();
    }
  } else {
    result = $('div').first().html();
  }
  defer.resolve(result);
  return defer.promise;
};
