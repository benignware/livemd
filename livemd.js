module.exports = function (grunt) {
  
  var
    path = require('path'),
    deepmerge = require("deepmerge"),
    livemd = require("livemd"),
    convertmd = require("./lib/convertmd"),
    Q = require("q"),
    compile = function(src, dest, options) {
      var
        defer = Q.defer(),
        data = grunt.file.read(src),
        done = function(result) {
          grunt.file.write(dest, result);
          defer.resolve(result);
        };
        options = deepmerge(options, {
          paths: options.paths.slice().concat([path.dirname(src), path.dirname(dest)])
        });
        livemd(data, options)
          .done(function(result) {
            if (dest.split(".").pop() === 'html' || options.output === 'html') {
              convertmd(result, deepmerge(options, {
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
    };
    
  grunt.registerMultiTask('livemd', 'Generate live-samples from markdown files', function(config) {
    var
      options = deepmerge({
        // Task Defaults
        title: '',
        layout: {
          data: {
            pkg: grunt.config().pkg || require(process.cwd() + '/package.json')
          }
        },
        paths: []
      }, this.options()),
      done = this.async();
    
    Q.all(this.files.map(function(f) {
      return compile(f.src, f.dest, options);
    })).then(function() {
      done();
    });
    
  });
};