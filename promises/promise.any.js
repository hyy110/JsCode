Promise.Myall = function(promises) {
  let arr = [];
  let count = 0;
  return new promises((resolve, reject) => {
    promises.foreach(promise => {
      promise.then(value => {
        resolve(value);
      }, err=> {
        count ++;
        arr.push(err);
        if (count === promises.length) reject(arr);
      })
    })
  })
}