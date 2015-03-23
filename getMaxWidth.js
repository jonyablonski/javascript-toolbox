/**
 * Get image's max-width:100%; in pixels
 */
function getMaxWidth(img) {
  var maxWidth;

  // Check if naturalWidth is supported
  if (img.naturalWidth !== undefined) {
    maxWidth = img.naturalWidth;

  // Not supported, use in-memory solution as fallback
  } else {
    var image = new Image();
    image.src = img.src;
    maxWidth = image.width;
  }

  // Return the max-width
  return maxWidth;
}

// Make sure images are fully loaded before checking widths
function hasDimensions(img) {
  return !!((img.complete && typeof img.naturalWidth !== "undefined") || img.width);
}