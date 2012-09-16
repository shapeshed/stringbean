exports = module.exports = new Stringbean;

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
}

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
}

/**
* Removes non alphabetic characters from a string
* 
* @param {String} s The string to test
* @return {String} The filtered string
*/
Stringbean.prototype.removeAlpha = function(s) {
  return s.replace(/[^A-Za-z ]+/g, "")
}

/**
* Removes non alphanumeric characters from a string
* 
* @param {String} s The string to test
* @return {String} The filtered string
*/
Stringbean.prototype.removeNonAlphanumeric = function(s) {
  return s.replace(/[^A-Za-z0-9 ]+/g, "")
}


/**
* Removes non alphanumeric characters from a string
* 
* @param {String} s The string to test
* @return {String} The filtered string
*/
Stringbean.prototype.removeNonNumeric = function(s) {
  return s.replace(/[^0-9-.]/g, "");
}

/**
* Removes numeric characters from a string
* 
* @param {String} s The string to test
* @return {String} The filtered string
*/
Stringbean.prototype.removeNumeric = function(s) {
  return s.replace(/[0-9]/g, "");
}

/**
* Base64 encodes a string
* 
* @param {String} s The string to test
* @return {String} The filtered string
*/
Stringbean.prototype.base64Encode = function(s) {
  return new Buffer(s).toString('base64');
}

/**
* Base64 decodes a string
* 
* @param {String} s The string to test
* @return {String} The filtered string
*/
Stringbean.prototype.base64Decode = function(s) {
  return new Buffer(s, 'base64').toString('utf8');
}



