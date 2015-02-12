var parallaxOpacity = function(element) {
    element.style.opacity = 1-Math.floor(latestKnownScrollY)/1000;
};