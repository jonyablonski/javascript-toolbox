var eventCheck = function() {
   var size = window.getComputedStyle(body,':after').getPropertyValue('content');
   return removeQuotes(size);
};