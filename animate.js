/**
 * Apply a CSS animation to an element
 */
 const animate = (elem, animation, hide, callback) => {

  // If there's no element or animation, do nothing
  if (!elem || !animation) return;

  // Remove the [hidden] attribute
  elem.removeAttribute('hidden');

  // Apply the animation
  elem.classList.add(animation);

  // Detect when the animation ends
  elem.addEventListener('animationend', function endAnimation(event) {

    // Remove the animation class
    elem.classList.remove(animation);

    // If the element should be hidden, hide it
    if (hide) {
      elem.setAttribute('hidden', 'true');
    }

    // Remove this event listener
    elem.removeEventListener('animationend', endAnimation, false);

    if (callback) {
      // Fire callback function
      callback();
    }

  }, false);
}