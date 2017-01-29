/**
 * For loop
 */
for (var i = 0; i < elems.length; i++) {
	console.log(i); // index
	console.log(elems[i]); // object
}

// Exclude first item
for (var i = 0; i < content.length; i++) {
	if ( i !== 0) {
		console.log(elems[i]); // object
	}
}

// Arrays and node lists
var elems = document.querySelectorAll( '.some-class' );
for ( var i = 0, len = elems.length; i < len; i++ ) {
    console.log(i) // index
    console.log(elems[i]) // object
}

// Objects
var obj = {
    apple: 'yum',
    pie: 3.214,
    applePie: true
};
for ( var prop in obj ) {
    if ( Object.prototype.hasOwnProperty.call( obj, prop ) ) {
        console.log( prop ); // key
        console.log( obj[prop] ); // value
    }
}