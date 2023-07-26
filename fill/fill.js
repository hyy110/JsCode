Array.prototype.myFill = function(initValue, start, end) {
  let arr = this;
  end = end < 0 ? array.length + end : end;
  for (let i = start; i < end; i ++) {
    arr[i] = initValue;
  }

  return arr;
}
