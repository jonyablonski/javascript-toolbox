/**
 * Check if CSS media query has fired
 * 1. Pass in keywords to body:after content that via media query
 * 2. Detect this value in JS
 */
var mediaCheck = function() {
   var media = window.getComputedStyle(body,':after').getPropertyValue('content');
   return removeQuotes(media);
};