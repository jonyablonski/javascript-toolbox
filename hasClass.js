// hasClass, takes two params: element and classname
function hasClass(el, cls) {
  return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
}