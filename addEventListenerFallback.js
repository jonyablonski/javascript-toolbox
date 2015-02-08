if (document.addEventListener) {
  el.addEventListener('click', modifyText, false);
} else if (document.attachEvent)  {
  el.attachEvent('onclick', modifyText);
}