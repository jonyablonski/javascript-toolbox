function pointerEvents() {
	var element = document.createElement('x');
	element.style.cssText = 'pointer-events:auto';
	return element.style.pointerEvents === 'auto';
}
if (pointerEvents()) {
	document.documentElement.className += ' pointer-events';
}