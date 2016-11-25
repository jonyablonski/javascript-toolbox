pfx = ["webkit", "moz", "MS", "o", ""];

var prefixedEventListener = function( element, type, callback ) {
  for (var p = 0; p < pfx.length; p++) {
    if (!pfx[p]) {
      type = type.toLowerCase();
    }
    element.addEventListener(pfx[p]+type, callback, false);
  }
};

// Usage
// prefixedEvent(entry, "AnimationEnd", deleteElem);