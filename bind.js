var elem = document.querySelector('.some-class');
var someFunction = function (var1, var2, var3, event) {
    // Do stuff
}
elem.addEventListener('click', someFunction.bind(null, var1, var2, var3), false);
elem.addEventListener('mouseover', someFunction.bind(null, var1, var2, var3), false);