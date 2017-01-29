var loadSVG = function() {
	var ajax = new XMLHttpRequest();
	ajax.open('GET', svgSymbols, true);
	ajax.send();
	ajax.onload = function() {
		var div = document.createElement('div');
		div.style.display = 'none';
		div.innerHTML = ajax.responseText;
		document.body.insertBefore(div, document.body.childNodes[0]);
	};
};