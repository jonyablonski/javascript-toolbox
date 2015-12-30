var getJSONP = function ( url, callback ) {

    // Create script with url and callback (if specified)
    var ref = window.document.getElementsByTagName( 'script' )[ 0 ];
    var script = window.document.createElement( 'script' );
    script.src = url + (url.indexOf( '?' ) + 1 ? '&' : '?') + 'callback=' + callback;

    // Insert script tag into the DOM (append to <head>)
    ref.parentNode.insertBefore( script, ref );

    // After the script is loaded (and executed), remove it
    script.onload = function () {
        this.remove();
    };

};

var logAPI = function ( data ) {
    console.log( data );
}
getJSONP( 'http://api.petfinder.com/shelter.getPets?format=json&key=12345&shelter=AA11', 'logAPI' );