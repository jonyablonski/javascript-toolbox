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