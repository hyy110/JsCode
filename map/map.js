Array.prototype.myMap = function(callback) {
  let res = [];
  let arr = this;
  for (let i = 0; i < arr.length; i ++) {
    res.push(callback(arr[i]));
  }

  return res;
}