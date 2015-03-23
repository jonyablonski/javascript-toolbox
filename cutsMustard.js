/**
 * Cut the Mustard / Method A
 */
var supports = !!document.querySelector && !!window.addEventListener;
if ( !supports ) return;


/**
 * Cut the Mustard / Method B
 */
if ( 'querySelector' in document && 'addEventListener' in window && "classList" in document.documentElement ) {
    // Scripts go here
}


/**
 * Cut the Mustard / Method C
 */
if ( 'querySelector' in document && 'addEventListener' in window ) {
    document.documentElement.className += 'js';
}


/**
 * Cut the Mustard / Method D
 * 1. Test for support
 * 2. Remove '.no-js' on <html> with '.js'
 */
  if (!document.querySelector && !window.addEventListener) { /* 1 */
    return;
  } else {
    document.documentElement.className = "js"; /* 2 */
  }


/**
 * Cut the Mustard / Method E
 */
(function (win, doc) {
  if (!win.addEventListener) {
    return;
  }
  ...
  var enhanceclass = 'cutsthemustard';
  doc.documentElement.className += ' ' + enhanceclass;
}(this, this.document));


/**
 * Cut the Mustard / Method F
 */
 var feature = {
  addEventListener : !!window.addEventListener,
  querySelectorAll : !!document.querySelectorAll,
};

if (feature.addEventListener && feature.querySelectorAll) {
  this.init();
}