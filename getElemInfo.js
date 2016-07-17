/**
 * Get the element’s dimensions and position
 */
var getElemInfo = function(elem) {
    var offsetTop = 0;
    var offsetLeft = 0;
    var offsetHeight = elem.offsetHeight;
    var offsetWidth = elem.offsetWidth;

    do {
        if (!isNaN(elem.offsetTop)) {
            offsetTop += elem.offsetTop;
        }
        if (!isNaN(elem.offsetLeft)) {
            offsetLeft += elem.offsetLeft;
        }
    } while ((elem = elem.offsetParent) !== null);

    return {
        top: offsetTop,
        left: offsetLeft,
        height: offsetHeight,
        width: offsetWidth
    };
};