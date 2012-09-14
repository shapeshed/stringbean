var assert = require('assert'),
    stringbean = require('../lib/stringbean');

describe('when passing a string to the escapeHTML method', function(done){
  it('should correctly escape HTML tags', function(done){
    var testString = "<script>XSS Baby!</script>";
    assert.strictEqual("&lt;script&gt;XSS Baby!&lt;/script&gt;", stringbean.escapeHTML(testString));
    done();
  })
})
describe('when passing a string to the removeNonAlphanumeric method', function(done){
  it('should correctly remove non alphanumeric characters', function(done){
    var testString = "$£@@$%^foo(*&^%$£!@";
    assert.strictEqual("foo", stringbean.removeNonAlphanumeric(testString));
    done();
  })
})
