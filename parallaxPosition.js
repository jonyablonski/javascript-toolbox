var parallaxPosition = function(element) {
  [].slice.call(element).forEach(function(el,i){
    el.style[transformProperty] = 'translate3d(0px,' + (latestKnownScrollY / 3) + 'px, 0px)';
  });
};