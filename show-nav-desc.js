/**
 * Reset navigation descriptions
 */
var resetNavDesc = function() {
  forEach(primaryDesc.children, function (value) {
    if (value.classList.contains(activeClass)) {
      value.classList.remove(activeClass);
    }
  });
};


/**
 * Set default navigation description
 */
var defaultNavDesc = function() {
  var itemURL = window.location.href;
  var itemArray = itemURL.split( '/' );
  var itemId = itemArray[3];
  var itemDesc;
  if (itemId) {
    itemDesc = primaryDesc.querySelector('#' + itemId);
  } else if (itemId === '') {
    itemDesc = primaryDesc.querySelector('#home');
  }

  if (itemDesc) {
    itemDesc.classList.add(activeClass);
  }
};


/**
 * Show navigation description
 */
var showNavDesc = function(event) {
  var item = event.target;
  if (item.nodeName === 'A') {
    var itemURL = item.getAttribute('href');
    var itemArray = itemURL.split( '/' );
    var itemId = itemArray[3];
    var itemDesc;

    if (itemId) {
      itemDesc = primaryDesc.querySelector('#' + itemId);
    } else {
      itemDesc = primaryDesc.querySelector('#home');
    }

    resetNavDesc();
    itemDesc.classList.add(activeClass);
  }
};


defaultNavDesc();
primaryNav.addEventListener('mouseover', showNavDesc, false);