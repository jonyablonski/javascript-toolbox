var checkActiveCategory = function () {

	// Create Categories array
	var categories = [];

	// Loop through section headers
	forEach( sectionHeaders, function ( index ) {

		// If the section header is at the top of the page (minus category menu height)
		if ( wScrollCurrent >= ( index.offsetTop - navHeight ) - 5 ) {

			// Get section ID and add this id the Categories array
			var sectionId = index.parentNode.getAttribute( 'id' );
			categories.push( sectionId );

		} else {
			return;
		}

	});

	// Get last item in Categories array
	var activeSection = categories[ categories.length - 1 ];

	// Find the corresponding category nav link to the last item in the Categories array
	var activeSectionLink = categoryNav.querySelector('a[href="#' + activeSection + '"]');

	// If there is an active section link, pass it into setActiveCategory()
	if ( activeSectionLink ) {
		resetActiveClass( activeSectionLink );
		activeSectionLink.classList.add( activeClass );
	}
};