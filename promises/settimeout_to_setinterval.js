function _setInterval(fn, delay, ...args) {
  let cancel = false;
  const task = () => {
    setTimeout(() => {
      if (!cancel) {
        fn.apply(this, args);
        task();
      }
    }, delay)
  }

  task();
  return () => { cancel = true };
}

function load() {
  console.log('load');
}

_setInterval(load, 1000)