var
  path = require("path"),
  fs = require("fs"),
  deepmerge = require("deepmerge"),
  cheerio = require("cheerio"),
  Q = require("q");

module.exports = function livemd(string, options, callback) {
  
  options = deepmerge({
    // Defaults
    debug: false,
    wrap: '<div class="highlight-example"></div>',
    prefilter: null,
    paths: [],
    compiler: {
      sass: {
        includePaths: []
      },
      less: {
        paths: []
      }
    }
  }, options);
  
  
  if (fs.existsSync(string)) {
    options = deepmerge(options, {
      paths: options.paths.slice().concat([path.dirname(string)])
    });
    string = fs.readFileSync(string);
  }
  
  options.compiler.sass.includePaths = options.paths.concat(options.compiler.sass.includePaths);
  options.compiler.less.paths = options.paths.concat(options.compiler.less.paths);
  
  if (typeof options.prefilter === 'function') {
    string = options.prefilter(string);
  }
  
  var compilers = fs.readdirSync(__dirname + '/compilers').map(function(file) {
    return path.basename(file).replace(/(?:\.[\+\w]*)+/, "");
  });
  
  var
    defer = Q.defer(),
    compilers = fs.readdirSync(__dirname + '/compilers').map(function(file) {
      return path.basename(file).replace(/(?:\.\w*)+/, "");
    }),
    pattern = new RegExp("\n```([^\n]*)" + "\s*\n*\s*([^`]*)\s*```", "gi"), 
    matches = [],
    match,
    result,
    offset = 0,
    index,
    input = string,
    lang,
    code;
  
  while (match = pattern.exec(string)) {
    matches.push(match);
  }
  
  var blocks = matches.map(function(match) {
    return {
      match: match,
      lang: match[1].trim(),
      code: match[2].trim()
    };
  });
  
  if (blocks.length > 0) {
    Q.all(blocks.map(function(block) {
      var
        lang = block.lang.split("+")[0],
        compile = null,
        promise;
      try {
        compile = require("./compilers/" + lang + ".js");
      } catch(e) {
        // Compiler not found
      }
      if (compile) {
        var promise = compile(block.code, options);
        promise.done(function(result) {
          block.result = result;
        });
        return promise;
      } else {
        promise = Q.defer();
        promise.resolve();
      }
      return promise;
    })).done(function() {
      result = "";
      blocks
        .filter(function(block) {
          return block.result;
        })
        .forEach(function(block) {
          index = block.match.index;
          input = block.match.input || "";
          result+= input.substring(offset, index);
          if (block.result) {
            // Add live sample
            result+= "\n" + block.result + "\n\n";
          }
          result+= "\n```" + block.lang + "\n" + block.code + "\n```\n\n";
          offset = index + block.match[0].length;
        });
      result+= "\n" + input.substring(offset);
      // Resolve
      defer.resolve(result);
    });
  } else {
    defer.resolve(string);
  }
  return defer.promise;
};