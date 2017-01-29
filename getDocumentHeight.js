/**
 * Get the height of the `document` element
 * @return {Number} The height
 */
var getDocumentHeight = function () {
    return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
    );
};