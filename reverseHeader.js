var header = document.getElementById('js-header'),
      distanceY = window.pageYOffset || document.documentElement.scrollTop,
      scrollThresh = 300,
      headerReversedClass = 'is-reversed';


var onScroll = throttle(function() {
  distanceY = window.pageYOffset || document.documentElement.scrollTop;
  reverseHeader();
}, 50);


/**
 * Reverse header 'state' by checking scroll distance
 */
var reverseHeader = function() {
  if (distanceY > scrollThresh) {
    if (!body.classList.contains(toggledNavClass)) {
      header.classList.add(headerReversedClass);
    }
  } else {
      if (header.classList.contains(headerReversedClass)) {
          header.classList.remove(headerReversedClass);
      }
  }
};


window.addEventListener('scroll', onScroll, false);