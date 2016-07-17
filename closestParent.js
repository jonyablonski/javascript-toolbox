/**
 * @param   {Element}       el
 * @param   {string}        selector
 * @param   {boolean}       [includeSelf]
 * @return  {Element|null}
 */

closestParent = function(el, selector, includeSelf) {
    var parent = el.parentNode;

    if (includeSelf && el.matches(selector)) {
        return el;
    }

    while (parent && parent !== document.body) {
        if (parent.matches && parent.matches(selector)) {
            return parent;
        } else if (parent.parentNode) {
            parent = parent.parentNode;
        } else {
            return null;
        }
    }

    return null;
};