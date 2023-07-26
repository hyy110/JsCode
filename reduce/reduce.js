Array.prototype.myReduce = function(callback, ...args) {
  let start = 0, pre;
  let arr = this;
  if (args.length) {
    pre = args[0];
  } else {
    pre = arr[0];
    start = 1;
  }
  for (let i = start; i < arr.length; i ++) {
    pre = callback(pre, arr[i], i, arr);
  }

  return pre;
}

let add = function(a, b) {
  return a + b;
}

let arr = [1, 2];
console.log(arr.myReduce(add, 1));
