var toggleNav = function(e) {
	body.classList.contains(toggledNavClass) ? body.classList.remove(toggledNavClass) : body.classList.add(toggledNavClass);
	e.preventDefault();
};