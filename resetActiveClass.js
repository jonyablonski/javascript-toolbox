var resetActiveClass = function ( elem ) {
	var siblings = getSiblings( elem );
	forEach( siblings, function ( value ) {
		if (value.classList.contains( activeClass )) {
			value.classList.remove( activeClass );
		}
	});
};