var functionName = function () {
  element.addEventListener( 'click', function( event ) {
    if( event.target && event.target.nodeName === 'A' ) {
      // Do Something
    }
  });
};

functionName();