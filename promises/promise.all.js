Promise.Myall = function (promises) {
  return new Promise((resolve, reject) => {
    if (promises === null || typeof promises[Symbol.iterator] !== "function") {
      throw new TypeError(`${promises} is not a iterator`);
    }
    promises = [...promises];

    let count = 0;
    let arr = [];
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((res) => {
          arr[index] = res;
          if (++count === promises.length) resolve(arr);
        })
        .catch(reject);
    });
  });
};

Promise.Myall([
  Promise.reject(1),
  Promise.resolve(2),
  Promise.resolve(3),
  4,
]).then(
  (data) => {
    // data:[1,2,3,4]
    // 传递[pro1,pro2,pro3,4]的话:内部默认处理Promise.resolve(4)
    console.log("成功", data);
  },
  (reason) => {
    // reason:reason2
    console.log("失败", reason);
  }
);
