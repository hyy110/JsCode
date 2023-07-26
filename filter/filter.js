Array.prototype.myFilter = function(callback) {
  const res = [];
  let arr = this;
  for (let i  = 0; i < arr.length; i ++) {
    if (callback(arr[i])) {
      res.push(arr[i], i, arr);
    }
  }

  return res;
}

let c = [1, 2, 3, 4, 5];
console.log(c.myFilter(item => item % 2 == 0))