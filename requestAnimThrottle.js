function throttle(action) {
  let isRunning = false;
  return function() {
    if (isRunning) return;
    isRunning = true;
    window.requestAnimationFrame(() => {
      action();
      isRunning = false;
    });
  }
}

//Usage

window.addEventListener('scroll', throttle(() => {
  const scrollTop = window.scrollY;
  /* doSomething with scrollTop */
}));

