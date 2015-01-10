if (el.addEventListener) {
  el.addEventListener('click', modifyText, false); 
} else if (el.attachEvent)  {
  el.attachEvent('onclick', modifyText);
}