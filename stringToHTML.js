// Turn strings into HTML
const stringToHTML = (str) => {
  let parser = new DOMParser();
  let doc = parser.parseFromString(str, 'text/html');
  return doc.body.firstChild;
}