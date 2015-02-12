function removeQuotes(string) {
  if (typeof string === 'string' || string instanceof String) {
      string = string.replace(/^['"]+|\s+|\\|(;\s?})+|['"]$/g, '');
  }
  return string;
}