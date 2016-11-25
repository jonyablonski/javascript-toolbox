var checkURL = (function() {
	if ( window.location.hash ) {
		var hash = window.location.hash.substring(1);
		if ( hash === 'newsletter' ) {
			var trigger = document.querySelector( '.intro__news' ).querySelector( 'a' );
			trigger.click();
		}
	}
})();