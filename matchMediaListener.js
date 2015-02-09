window.matchMedia( "(min-width: 45em)" ).addListener( function( mm ) {
	if ( mm.matches ) {
		// The viewport is at least 45em in width
	} else {
		// The viewport is less than 45em in width
	}
});