'use strict';

function Stringbean() { }

/**
* Escapes HTML
*
* @param {String} s The string to sanitise
* @return {String} The filtered string
*/
Stringbean.prototype.escapeHTML = function(s) {
  return s.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
};

/**
* Unescapes escaped HTML
*
* @param {String} s The string to sanitise
* @return {String} The filtered string
*/
Stringbean.prototype.unescapeHTML = function(s) {
  return s.replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"');
};

/**
* Removes non alphabetic characters from a string
*
* @param {String} s The string to test
* @return {String} The filtered string
*/
Stringbean.prototype.removeAlpha = function(s) {
  return s.replace(/[^A-Za-z ]+/g, "");
};

/**
* Removes non alphanumeric characters from a string
*
* @param {String} s The string to test
* @return {String} The filtered string
*/
Stringbean.prototype.removeNonAlphanumeric = function(s) {
  return s.replace(/[^A-Za-z0-9 ]+/g, "");
};


/**
* Removes non alphanumeric characters from a string
*
* @param {String} s The string to test
* @return {String} The filtered string
*/
Stringbean.prototype.removeNonNumeric = function(s) {
  return s.replace(/[^0-9-.]/g, "");
};

/**
* Removes numeric characters from a string
*
* @param {String} s The string to test
* @return {String} The filtered string
*/
Stringbean.prototype.removeNumeric = function(s) {
  return s.replace(/[0-9]/g, "");
};

/**
* Base64 encodes a string
*
* @param {String} s The string to test
* @return {String} The filtered string
*/
Stringbean.prototype.base64Encode = function(s) {
  return new Buffer(s).toString('base64');
};

/**
* Base64 decodes a string
*
* @param {String} s The string to test
* @return {String} The filtered string
*/
Stringbean.prototype.base64Decode = function(s) {
  return new Buffer(s, 'base64').toString('utf8');
};

/**
* Checks whether a string is JSON
*
* @param {String} s The string to test
* @return {Boolean} true if it is JSON, false if not 
*/
Stringbean.prototype.isJSON = function(s) {
  try {
    JSON.parse(s);
  } catch (e) {
    return false;
  }
  return true;
};

/**
* Capitalizes the first character of a string
*
* @param {String} s The string to test
* @return {String} The capitalized string
*/
Stringbean.prototype.capitalize = function(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
};

exports = module.exports = new Stringbean();
