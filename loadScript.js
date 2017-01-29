function browserSupportsAllFeatures() {
	return window.fetch && document.documentElement.classList;
}

/**
 * Load Polyfills
 */
function loadScript( src, done ) {
	var js = document.createElement('script');
	js.src = src;
	js.onload = function() {
		done();
	};
	js.onerror = function() {
		done(new Error('Failed to load script ' + src));
	};
	document.head.appendChild(js);
}

/**
 * Check Browser Support
 */
if (browserSupportsAllFeatures()) {
	main();
} else {
	loadScript('../js/polyfills.js', main);
}

/**
 * Main Scripts
 */
function main() {}