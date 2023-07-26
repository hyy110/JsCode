window.onload = function () {
  function debounce(fn, delay) {
    let timer = null;
    return function (...args) {
      clearTimeout(timer);

      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  }

  function throttle(fn, delay) {
    let nowTime;
    let lastTime;
    return function (...args) {
      nowTime = Date.now();
      if (!lastTime || nowTime - lastTime >= delay) {
        fn.call(this, args);
        lastTime = nowTime;
      }
    };
  }

  function handle() {
    console.log("click");
  }

  function handle_2() {
    console.log("scroll");
  }

  const btn = document.querySelector("#btn");
  btn.addEventListener("click", debounce(handle, 1000));
  window.addEventListener("scroll", throttle(handle_2, 1000));
};
