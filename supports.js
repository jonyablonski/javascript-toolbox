var supports = !!document.querySelector && !!window.addEventListener;

var cutMustard = (function(){
  if ( !supports ) {
  	document.documentElement.className += ' ' + 'cuts-mustard';
  } else {
  	return;
  }
})();