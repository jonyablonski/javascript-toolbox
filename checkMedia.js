/**
 * Check if CSS media query has fired
 * 1. Pass in keywords to body:after content that via media query
 * 2. Detect this value in JS
 */
var checkMedia = function() {
	var media = window.getComputedStyle( body,':after' ).getPropertyValue( 'content' );
	return removeQuotes( media );
};

// Usage (HTML)
// body:after {
// 	display: none;
// 	content: 'small';

// 	@include media(">small") {
// 		content: 'medium';
// 	}

// 	@include media(">large") {
// 		content: 'large';
// 	}
// }

// Usage (JS)
if (checkMedia() === 'small') {
	// Run code
}