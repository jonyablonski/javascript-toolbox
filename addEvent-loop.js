/**
 * addEventListener to collection
 */

// Select all links
var links = document.querySelectorAll("a");

// For each link element
[].forEach.call(links, function(el) {

  // Add event listener
  el.addEventListener("click", function(event) {
    event.preventDefault();
    alert("You clicked");
  }, false);

});