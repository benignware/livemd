'use strict';

var
  fs = require('fs'),
  mkdirp = require('mkdirp'),
  livemd = require('../livemd.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.livemd = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  compile: function(test) {
    test.expect(1);
    
    var promise = livemd('test/fixtures/README.md', {});
    promise.done(function(result) {
      mkdirp('tmp');
      fs.writeFileSync('tmp/README.md', result);
      var actual = fs.readFileSync('tmp/README.md').toString();
      var expected = fs.readFileSync('test/expected/README.md').toString();
      test.equal(actual, expected, 'should generate markdown with runtime samples.');
      test.done();
    });
    
  },
  /*
  export: function(test) {
    test.expect(1);
    
    var promise = livemd('test/fixtures/README.md', {});
    promise.done(function(result) {
      mkdirp('tmp');
      fs.writeFileSync('tmp/README.md', result);
      var actual = fs.readFileSync('tmp/README.md').toString();
      var expected = fs.readFileSync('test/expected/README.md').toString();
      test.equal(actual, expected, 'should generate markdown with runtime samples.');
  
      test.done();
    });
    
  }*/
};
