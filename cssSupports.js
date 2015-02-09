// CSS Supports normalization
var cssSupports = window.CSS && window.CSS.supports || window.supportsCSS;

// Usage
if ( cssSupports && cssSupports ('(transition: none)') ) {
	// CSS transitions are supported!
}