/**
 * Various ways to add/remove classes
 */

// Select an element
var element = document.querySelector(".some-class");

// Give class "foo" to the element
element.className = "foo";

// Adding a class without replacing the current classes
element.className += " foo";

// Removing "no-js" class from html-element and replacing it with "js"
document.documentElement.className = "js";