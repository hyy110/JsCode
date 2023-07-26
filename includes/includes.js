Array.prototype.myIcludes = function(value, start = 0) {
  let arr = this;
  start = start < 0 ? arr.length + start : start;
  for (let i = start; i < arr.length; i ++) {
    if (this[i] == value || (Number.isNaN(value) && Number.isNaN(arr[i]))) {
      return true;
    }
  }

  return false;
}