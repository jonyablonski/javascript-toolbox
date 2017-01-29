var removeElement = function( element ) {
	if ( element.parentNode ) {
		element.parentNode.removeChild( element );
	}
};