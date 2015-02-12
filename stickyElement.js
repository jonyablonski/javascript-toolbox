var stickyElement = function(element, offsetElement, spacing) {
  var distanceFromTop = getElemDistance(element),
  offsetDistance = offsetElement.clientHeight + spacing;
  if ( latestKnownScrollY > (distanceFromTop - offsetDistance) )  {
    element.classList.add('is-sticky');
  } else if (latestKnownScrollY < (distanceFromTop - offsetDistance) && element.classList.contains('is-sticky') ) {
    element.classList.remove('is-sticky');
  } else {
    return;
  }
};