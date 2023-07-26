function _setTimeout(fn, delay, ...args) {
  let timer = setInterval(() => {
    fn.apply(this, args);
    clearInterval(timer);
  }, delay);
}