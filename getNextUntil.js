const getNextUntil = function (elem, selector) {

  // Setup siblings array and get next sibling
  var siblings = [];
  var next = elem.nextElementSibling;

  // Loop through all siblings
  while (next) {

    // If the matching item is found, quit
    if (selector && next.matches(selector)) break;

    // Otherwise, push to array
    siblings.push(next);

    // Get the next sibling
    next = next.nextElementSibling

  }

  return siblings;

};