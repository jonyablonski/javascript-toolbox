/**
 * Cut the Mustard / Method A
 */
var supports = !!document.querySelector && !!window.addEventListener;
if ( !supports ) return;


/**
 * Cut the Mustard / Method B
 */
if ( 'querySelector' in document && 'addEventListener' in window ) {
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
 */
  if (!document.querySelector && !window.addEventListener) {
    return;
  } else {
    // Add Enhancement class to document
    document.documentElement.className += 'js';
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