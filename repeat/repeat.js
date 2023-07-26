String.prototype.repeat = function (n) {
  let str = this;
  let res = '';
  while (n) {
    res += str;
    n --;
  }

  return res;
}

console.log('abc'.repeat(3));