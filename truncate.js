var truncate = function (elem, limit, after) {

  // Make sure an element and number of items to truncate is provided
  if (!elem || !limit) return;

  // Get the inner content of the element
  var content = elem.textContent.trim();

  // Convert the content into an array of words
  // Remove any words above the limit
  content = content.split(' ').slice(0, limit);

  // Convert the array of words back into a string
  // If there's content to add after it, add it
  content = content.join(' ') + (after ? after : '');

  // Inject the content back into the DOM
  elem.textContent = content;

};

// Usage
truncate(elem, 7, '...');