var stickyElement = function(element, offset) {
  var currentScrollY = lastScrollY,
  elementTop = element.offsetTop,
  offsetHeight = offset.clientHeight;

  if (currentScrollY > offsetHeight) {
    element.classList.add('is-sticky');
    mainContent.style.paddingTop = element.clientHeight + 'px';
  } else if ( currentScrollY < offsetHeight && element.classList.contains('is-sticky') ) {
    element.classList.remove('is-sticky');
    mainContent.style.paddingTop = '0px';
  } else {
    return;
  }

};