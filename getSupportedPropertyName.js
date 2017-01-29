var getSupportedPropertyName = function(properties) {
	for (var i = 0; i < properties.length; i++) {
		if (typeof document.body.style[properties[i]] !== 'undefined') {
			return properties[i];
		}
	}
	return null;
};

var transform = ['transform', 'msTransform', 'webkitTransform', 'mozTransform', 'oTransform'];

// Usage
elem.style[getSupportedPropertyName(transform)] = 'translate3d(0px,' + Math.round(wScrollCurrent * rate) + 'px, 0px)';