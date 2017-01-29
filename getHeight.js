/**
 * Get the height of an element
 * @param  {Node}   elem The element
 * @return {Number}      The height
 */
var getHeight = function ( elem ) {
    return Math.max( elem.scrollHeight, elem.offsetHeight, elem.clientHeight );
};

var elem = document.querySelector( '#some-element' );
var height = getHeight( elem ); // Get height
elem.style.height = '200px'; // Set height