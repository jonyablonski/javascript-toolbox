var checkVisibility = function(elem) {
    var viewportSize = getViewportSize();
    var currentScroll = getCurrentScroll();
    var elemInfo = getElemInfo(elem);
    var spaceOffset = 0.2;
    var elemHeight = elemInfo.height;
    var elemWidth = elemInfo.width;
    var elemTop = elemInfo.top;
    var elemLeft = elemInfo.left;
    var elemBottom = elemTop + elemHeight;
    var elemRight = elemLeft + elemWidth;

    var checkBoundaries = function() {
        // Defining the element boundaries and extra space offset
        var top = elemTop + elemHeight * spaceOffset;
        var left = elemLeft + elemWidth * spaceOffset;
        var bottom = elemBottom - elemHeight * spaceOffset;
        var right = elemRight - elemWidth * spaceOffset;

        // Defining the window boundaries and window offset
        var wTop = currentScroll.y + 0;
        var wLeft = currentScroll.x + 0;
        var wBottom = currentScroll.y - 0 + viewportSize.height;
        var wRight = currentScroll.x - 0 + viewportSize.width;

        // Check if the element is within boundary
        return (top < wBottom) && (bottom > wTop) && (left > wLeft) && (right < wRight);
    };

    return checkBoundaries();
};