var assert = require('assert'),
    stringbean = require('../lib/stringbean');

describe('when passing a string to the escapeHTML method', function(){
  it('should correctly escape HTML tags', function(){
    var testString = "<script>XSS Baby!</script>";
    assert.strictEqual("&lt;script&gt;XSS Baby!&lt;/script&gt;", stringbean.escapeHTML(testString));
  });
});
describe('when passing a string to the unescapeHTML method', function(){
  it('should correctly unescape escaped HTML', function(){
    var testString = "&lt;script&gt;alert(&quot;oh hai&quot;);&lt;/script&gt;";
    assert.strictEqual("<script>alert(\"oh hai\");</script>", stringbean.unescapeHTML(testString));
  });
});
describe('when passing a string to the removeNumeric method', function(){
  it('should correctly remove numeric characters', function(){
    var testString = "ABC123def";
    assert.strictEqual("ABCdef", stringbean.removeAlpha(testString));
  });
});
describe('when passing a string to the removeNonAlphanumeric method', function(){
  it('should correctly remove non alphanumeric characters', function(){
    var testString = "$£@@$%^foo(*&^%$£!@";
    assert.strictEqual("foo", stringbean.removeNonAlphanumeric(testString));
  });
});
describe('when passing a string to the removeNonNumeric method', function(){
  it('should correctly remove non numeric characters', function(){
    var testString = "ABCefg123hij";
    assert.strictEqual("123", stringbean.removeNonNumeric(testString));
  });
});
describe('when passing a string to the removeNumeric method', function(){
  it('should correctly remove numeric characters', function(){
    var testString = "foo1a2b3cbar";
    assert.strictEqual("fooabcbar", stringbean.removeNumeric(testString));
  });
});
describe('when passing a string to the base64Encode method', function(){
  it('should correctly base64 encode the string', function(){
    var testString = "base64encodethisplz";
    assert.strictEqual("YmFzZTY0ZW5jb2RldGhpc3Bseg==", stringbean.base64Encode(testString));
  });
});
describe('when passing a string to the base64Decode method', function(){
  it('should correctly base64 decode the string', function(){
    var testString = "YmFzZTY0ZGVjb2RldGhpc3Bseg==";
    assert.strictEqual("base64decodethisplz", stringbean.base64Decode(testString));
  });
});
describe('when passing a JSON string to the isJSON method', function(){
  it('should return true', function(){
    var testString = JSON.stringify({ some: "object" });
    assert.strictEqual(true, stringbean.isJSON(testString));
  });
});
describe('when passing an invalid JSON string to the isJSON method', function(){
  it('should return false', function(){
    var testString = "this is not JSON";
    assert.strictEqual(false, stringbean.isJSON(testString));
  });
});
