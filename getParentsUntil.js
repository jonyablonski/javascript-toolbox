var getParentsUntil = function (elem, parent, selector) {

    var parents = [];
    if ( parent ) {
        var parentType = parent.charAt(0);
    }
    if ( selector ) {
        var selectorType = selector.charAt(0);
    }

    // Get matches
    for ( ; elem && elem !== document; elem = elem.parentNode ) {

        // Check if parent has been reached
        if ( parent ) {

            // If parent is a class
            if ( parentType === '.' ) {
                if ( elem.classList.contains( parent.substr(1) ) ) {
                    break;
                }
            }

            // If parent is an ID
            if ( parentType === '#' ) {
                if ( elem.id === parent.substr(1) ) {
                    break;
                }
            }

            // If parent is a data attribute
            if ( parentType === '[' ) {
                if ( elem.hasAttribute( parent.substr(1, parent.length - 1) ) ) {
                    break;
                }
            }

            // If parent is a tag
            if ( elem.tagName.toLowerCase() === parent ) {
                break;
            }

        }

        if ( selector ) {

            // If selector is a class
            if ( selectorType === '.' ) {
                if ( elem.classList.contains( selector.substr(1) ) ) {
                    parents.push( elem );
                }
            }

            // If selector is an ID
            if ( selectorType === '#' ) {
                if ( elem.id === selector.substr(1) ) {
                    parents.push( elem );
                }
            }

            // If selector is a data attribute
            if ( selectorType === '[' ) {
                if ( elem.hasAttribute( selector.substr(1, selector.length - 1) ) ) {
                    parents.push( elem );
                }
            }

            // If selector is a tag
            if ( elem.tagName.toLowerCase() === selector ) {
                parents.push( elem );
            }

        } else {
            parents.push( elem );
        }

    }

    // Return parents if any exist
    if ( parents.length === 0 ) {
        return null;
    } else {
        return parents;
    }

};

// Examples
// var elem = document.querySelector('#some-element');
// var parentsUntil = getParentsUntil(elem, '.some-class');
// var parentsUntilByFilter = getParentsUntil(elem, '.some-class', '[data-something]');
// var allParentsUntil = getParentsUntil(elem);
// var allParentsExcludingElem = getParentsUntil(elem.parentNode);