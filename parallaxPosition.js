var transform = ['transform', 'msTransform', 'webkitTransform', 'mozTransform', 'oTransform'];
var parallaxElem = document.querySelectorAll('[data-parallax]');

var getSupportedPropertyName = function(properties) {
	for (var i = 0; i < properties.length; i++) {
		if (typeof document.body.style[properties[i]] !== 'undefined') {
			return properties[i];
		}
	}
	return null;
};

window.requestAnimFrame = (function() {
	return  window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.oRequestAnimationFrame ||
	window.msRequestAnimationFrame ||
	function( callback ) {
		window.setTimeout(callback, 1000 / 60);
	};
})();

var parallax = function(elem, rate) {
	elem.style[getSupportedPropertyName(transform)] = 'translate3d(0px,' + Math.round(wScrollCurrent * rate) + 'px, 0px)';
};

var parallaxScroll = function() {
	forEach( parallaxElem, function ( value ) {
		var speed = value.getAttribute('data-parallax');
		parallax(value, speed);
	});
};

var scrollEventHandler = function() {
	if (parallaxElem) {
		requestAnimFrame( parallaxScroll );
	}
};

window.addEventListener( 'scroll', scrollEventHandler, false );


// Usage
<div class="elem" data-parallax=".5"></div>