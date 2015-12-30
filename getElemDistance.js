// Get current location's distance from the top of the page
var position = window.pageYOffset;

// Get an element's distance from the top of the page
var getElemDistance = function ( elem ) {
    var location = 0;
    if (elem.offsetParent) {
        do {
            location += elem.offsetTop;
            elem = elem.offsetParent;
        } while (elem);
    }
    return location >= 0 ? location : 0;
};
var elem = document.querySelector('#some-element');
var location = getElemDistance( elem );