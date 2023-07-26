Array.prototype.my_map = function(fn, context) {
  let newArr = [];
  const arr = this;
  const ctx = context ? context : arr;

  if (typeof fn !== 'function') {
    throw new Error(`${fn} is not a function`);
  }

  arr.forEach((item, index) => {
    newArr.push(fn.call(ctx, item, index, arr));
  })

  return newArr;
}