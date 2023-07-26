function repeat(fn, timer, delay) {
  return function callback(...args) {
    setTimeout(() => {
      fn(...args);
      timer --;
      if (timer>0) callback(...args);
    }, delay);
  }
}