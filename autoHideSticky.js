var autoHideSticky = function( elem, inactiveClass, activeClass ) {
	// scrolled to the very top; element sticks to the top
	if ( wScrollCurrent <= 0 ) {
		elem.classList.remove(inactiveClass);
		elem.classList.remove(activeClass);

	// scrolled up; element slides in
	} else if ( wScrollDiff > 0 && elem.classList.contains(inactiveClass) ) {
		elem.classList.remove(inactiveClass);
		elem.classList.add(activeClass);
	 }

	// scrolled down
	else if( wScrollDiff < 0 ) {

		// scrolled to the very bottom; element slides in
		if ( wScrollCurrent + wHeight >= dHeight && elem.classList.contains(inactiveClass) ) {
			elem.classList.remove( inactiveClass );
			elem.classList.add(activeClass);
		} else {
			elem.classList.add(inactiveClass);
			elem.classList.remove(activeClass);
		}
	}

	wScrollBefore = wScrollCurrent;
};

// Usage
autoHideSticky(header, 'is-inactive', 'is-active');