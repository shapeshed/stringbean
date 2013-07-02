var assert = require('assert'),
    stringbean = require('../lib/stringbean');

describe('when passing a string to the escapeHTML method', function(done){
  it('should correctly escape HTML tags', function(done){
    var testString = "<script>XSS Baby!</script>";
    assert.strictEqual("&lt;script&gt;XSS Baby!&lt;/script&gt;", stringbean.escapeHTML(testString));
    done();
  });
});
describe('when passing a string to the unescapeHTML method', function(done){
  it('should correctly unescape escaped HTML', function(done){
    var testString = "&lt;script&gt;alert(&quot;oh hai&quot;);&lt;/script&gt;";
    assert.strictEqual("<script>alert(\"oh hai\");</script>", stringbean.unescapeHTML(testString));
    done();
  });
});
describe('when passing a string to the removeNumeric method', function(done){
  it('should correctly remove numeric characters', function(done){
    var testString = "ABC123def";
    assert.strictEqual("ABCdef", stringbean.removeAlpha(testString));
    done();
  });
});
describe('when passing a string to the removeNonAlphanumeric method', function(done){
  it('should correctly remove non alphanumeric characters', function(done){
    var testString = "$£@@$%^foo(*&^%$£!@";
    assert.strictEqual("foo", stringbean.removeNonAlphanumeric(testString));
    done();
  });
});
describe('when passing a string to the removeNonNumeric method', function(done){
  it('should correctly remove non numeric characters', function(done){
    var testString = "ABCefg123hij";
    assert.strictEqual("123", stringbean.removeNonNumeric(testString));
    done();
  });
});
describe('when passing a string to the removeNumeric method', function(done){
  it('should correctly remove numeric characters', function(done){
    var testString = "foo1a2b3cbar";
    assert.strictEqual("fooabcbar", stringbean.removeNumeric(testString));
    done();
  });
});
describe('when passing a string to the base64Encode method', function(done){
  it('should correctly base64 encode the string', function(done){
    var testString = "base64encodethisplz";
    assert.strictEqual("YmFzZTY0ZW5jb2RldGhpc3Bseg==", stringbean.base64Encode(testString));
    done();
  });
});
describe('when passing a string to the base64Decode method', function(done){
  it('should correctly base64 decode the string', function(done){
    var testString = "YmFzZTY0ZGVjb2RldGhpc3Bseg==";
    assert.strictEqual("base64decodethisplz", stringbean.base64Decode(testString));
    done();
  });
});
describe('when passing a JSON string to the isJSON method', function(done){
  it('should return true', function(done){
    var testString = JSON.stringify({ some: "object" });
    assert.strictEqual(true, stringbean.isJSON(testString));
    done();
  });
});
describe('when passing an invalid JSON string to the isJSON method', function(done){
  it('should return false', function(done){
    var testString = "this is not JSON";
    assert.strictEqual(false, stringbean.isJSON(testString));
    done();
  });
});
