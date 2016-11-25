var anchor = event.target;

// Go up in the nodelist until we find a node with .href (HTMLAnchorElement)
while ( anchor && !anchor.href ) {
  anchor = anchor.parentNode;
}