var supportsSvg = function() {
	var div = document.createElement('div');
	div.innerHTML = '<svg/>';
	return (div.firstChild && div.firstChild.namespaceURI) === 'http://www.w3.org/2000/svg';
};

var iconsFallback = function() {

	// Get all SVGs on the page and how many there are
	var svgs = document.getElementsByTagName('svg'),
	svgL = svgs.length;

	// Loop through all SVGs on the page
	while( svgL-- ) {

		// If SVG isn't the first one, continue ...
		if(svgL > 0) {

			// Get title attribute of SVG
			var svgTitle = svgs[svgL].getAttribute('title');

			// Get all  elements from each SVG
			var uses = svgs[svgL].getElementsByTagName('use'),
			usesL = uses.length;

			// Loop through all  elements within an SVG
			while( usesL-- ) {

				// Get the 'xlink:href' attributes
				var svgId = uses[usesL].getAttribute('xlink:href');

				// Remove first character from variable (This removes the #)
				svgId = svgId.substring(1, svgId.length);

				// Create New Image
				var newImg = document.createElement('img');

				// Assign src attribute
				newImg.src = 'assets/dist/icons/png/' + svgId + '.png';

				// Assign alt attribute
				newImg.alt = svgTitle ? svgTitle : '';

				// Insert new element straight after the SVG in question
				svgs[svgL].parentNode.insertBefore(newImg, svgs[svgL].nextSibling);

			}

			// Remove all SVG nodes
			svgs[svgL].parentNode.removeChild(svgs[svgL]);
		}
	}
};

// Call iconsFallback method if SVG support test fails
if ( !supportsSvg() ) { iconsFallback(); }