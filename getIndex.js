/**
 * @param   {Element}   el
 * @param   {string}    [selector]
 * @return  {number}
 */

getIndex = function(el, selector) {
    var i = 0;

    while ((el = el.previousElementSibling) !== null) {
        if (!selector || el.matches(selector)) {
            ++i;
        }
    }

    return i;
};