exports = module.exports = new Stringbean;

function Stringbean() { }

/**
* Converts HTML tags to entities
* 
* @param {String} s The string to sanitise
* @return {String} The sanitised string
*/
Stringbean.prototype.escapeHTML = function(s) {
  return s.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
* Removes non alphanumeric characters from a string
* 
* @param {String} s The string to test
* @return {String} The filtered string
*/
Stringbean.prototype.removeNonAlphanumeric = function(s) {
  return s.replace(/[^\w\s]|_/g, "")
    .replace(/\s+/g, " ");
}



