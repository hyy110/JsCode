Promise.MyAllSettled = function (promises) {
  const res = [];
  for (let promise of promises) {
    res.push(
      Promise.resolve(promise).then(
        (value) => ({
          status: "FULFILLED",
          value,
        }),
        (reason) => ({
          status: "REJECT",
          reason,
        })
      )
    );
  }

  return Promise.all(res);
};

const promise1 = 3;
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 3000, "foo")
);
const promises = [promise2, promise1];
Promise.MyAllSettled(promises).then((results) => {
  console.log(results);
  results.forEach((result) => console.log(result));
});
// const p1 = Promise.resolve("p1_success");
// // p2：2 秒后成功
// const p2 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, "p2_success")
// );
// // p3：1 秒后失败
// const p3 = new Promise((resolve, reject) =>
//   setTimeout(reject, 1000, "p3_success")
// );

// Promise.MyAllSettled([p1, p2, p3, 1]).then((results) =>
//   results.forEach((result) => console.log(result))
// );
