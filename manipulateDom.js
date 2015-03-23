/**
 * Manipulate DOM
 */

 // Select an element
var element = document.querySelector(".class");

// Clone it
var clone = element.cloneNode(true);

// Do some manipulation off the DOM
clone.style.background = "#000";

// Replaces the original element with the new cloned one
element.parentNode.replaceChild(clone, element);

// Don't replace anything in the DOM
// Instead append the newly created div inside the <body>
document.body.appendChild(clone);