var getQueryString = function ( field, url ) {
	var href = url ? url : window.location.href;
	var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
	var string = reg.exec(href);
	return string ? string[1] : null;
};

// http://example.com&this=chicken&that=sandwich
var thisOne = getQueryString('this'); // returns 'chicken'
var thatOne = getQueryString('that'); // returns 'sandwich'
var anotherOne = getQueryString('another'); // returns null
var yetAnotherOne = getQueryString('example', 'http://another-example.com&example=something'); // returns 'something'