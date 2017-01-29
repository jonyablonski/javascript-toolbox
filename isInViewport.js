/**
* Determine if an element is in the visible viewport
*/
var isInViewport = function ( elem ) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};
var elem = document.querySelector('#some-element');
isInViewport(elem); // Boolean: returns true/false