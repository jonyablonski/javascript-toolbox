function getSupportedPropertyName(properties) {
	for (var i = 0; i < properties.length; i++) {
		if (typeof document.body.style[properties[i]] != "undefined") {
			return properties[i];
		}
	}
	return null;
}

var transform = ["transform", "msTransform", "webkitTransform", "mozTransform", "oTransform"];
var transformProperty = getSupportedPropertyName(transform);

if (transformProperty) {
	item.style[transformProperty] = "rotate(45deg)";
}