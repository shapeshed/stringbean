# Stringbean

[![Build Status](https://secure.travis-ci.org/shapeshed/stringbean.png)](http://travis-ci.org/shapeshed/stringbean)

Stringbean is a collection of string helper methods that don't clobber the `String` prototype. 

## Installation

    npm install stringbean

## Usage

    var stringbean = require('stringbean');

## Methods

### escapeHTML

Escapes HTML to entities

    var someString = "<script>XSS Baby!</script>";
    console.log(stringbean.escapeHTML(someString));

    &lt;script&gt;XSS Baby!&lt;/script&gt

### unescapeHTML

Unescapes escaped HTML

    var someString = "&lt;script&gt;alert(&quot;oh hai&quot;);&lt;/script&gt;";
    console.log(stringbean.escapeHTML(someString));

    <script>alert("oh hai")</script>;

### removeAlpha

Removes non alpha characters from a string

    var someString = "ABC123def";
    console.log(stringbean.removeAlpha(someString));

    ABCdef

### removeNonAlphanumeric

Removes non alphanumeric characters from a string

    var someString = "$£@@$%^foo(*&^%$£!@";
    console.log(stringbean.removeNonAlphanumeric(someString));

    foo

### removeNonNumeric

Removes non alphanumeric characters from a string

    var someString = "ABCefg123hij";
    console.log(stringbean.removeNonNumeric(someString));

    123

### removeNumeric

Removes numeric characters from a string

    var someString = "foo1a2b3cbar";
    console.log(stringbean.removeNumeric(someString));

    fooabcbar

### base64Encode

Base64 encodes a string

    var someString = "base64encodethisplz";
    console.log(stringbean.base64Encode(someString));

    YmFzZTY0ZW5jb2RldGhpc3Bseg==

### base64Decode

Base64 decodes a string

    var someString = "YmFzZTY0ZGVjb2RldGhpc3Bsegl";
    console.log(stringbean.base64Decode(someString));

    base64decodethisplz

### isJSON

Returns true if a string is JSON

    var someString = '{"some":"json"}';
    console.log(stringbean.isJSON(someString));

    true

### capitalize

Capitalizes the first character of a string

    var someString = 'uppercase this';
    console.log(stringbean.capitalize(someString));

    Uppercase this 
