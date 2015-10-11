var
  path = require('path'),
  fs = require('fs'),
  deepmerge = require("deepmerge"),
  compile = require("./lib/compile"),
  render = require("./lib/render"),
  Q = require("q");
module.exports = function (string, options) {
  
      var
        defer = Q.defer(),
        //data = grunt.file.read(src),
        data = fs.readFileSync(src),
        done = function(result) {
          //grunt.file.write(dest, result);
          defer.resolve(result);
        };
        options = deepmerge(options, {
          paths: options.paths.slice().concat([path.dirname(src), path.dirname(dest)])
        });
        compile(data, options)
          .done(function(result) {
            if (dest.split(".").pop() === 'html' || options.output === 'html') {
              render(result, deepmerge(options, {
                title: typeof options.title === 'function' ? options.title(src) : options.title,
              }))
                .done(function(result) {
                  done(result);
                });
            } else {
              done(result);
            }
          });
      return defer.promise;
    },
    options: (function() {
      var
        data = {};
      try
        data = require(process.cwd() + '/package.json';
      } catch (e) {
        return {};
      }
    })(),
    options = deepmerge({
      // Default options
      title: '',
      layout: {
        data: {
          pkg: fs.existsSync(require(process.cwd() + '/package.json')
        }
      },
      paths: []
    }),
    done = this.async();
  
  Q.all(this.files.map(function(f) {
    return compile(f.src, f.dest, options);
  })).then(function() {
    done();
  });
    
  });
};