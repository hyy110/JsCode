Array.prototype.myFlat = function() {
  let arr = this;
  let res = [];
  for (let i = 0; i < arr.length; i ++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(arr[i].myFlat());
    } else {
      res.push(arr[i]);
    }
  }

  return res;
}


console.log([1, [1, 2], [1, 3, 2, [1, 2, [1, 2]]]].myFlat());