# Stringbean

[![Build Status](https://secure.travis-ci.org/shapeshed/stringbean.png)](http://travis-ci.org/shapeshed/stringbean)

Stringbean is a collection of string helper methods that dont't clobber the `String` prototype. 

## Installation

    npm install stringbean

## Usage

    var stringbean = require('stringbean');

## Methods

### escapeHTML

Converts HTML tags to entities

    var someString = "<script>XSS Baby!</script>";
    console.log(stringbean.escapeHTML(someString));

    &lt;script&gt;XSS Baby!&lt;/script&gt;

### removeNonAlphanumeric

Removes non alphanumeric characters from a string

    var someString = "$£@@$%^foo(*&^%$£!@";
    console.log(stringbean.removeNonAlphanumeric(testString));

    foo

