/**
* Determine if an element is in the visible viewport
*/
function isInViewport(element) {
	var rect = element.getBoundingClientRect();
	var html = document.documentElement;
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || html.clientHeight) &&
		rect.right <= (window.innerWidth || html.clientWidth)
	);
}
var elem = document.querySelector('#some-element');
isInViewport(elem); // Boolean: returns true/false