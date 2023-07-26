function Mynew(fn, ...args) {
  let obj = {};
  Object.getPrototypeOf(obj) = fn.prototype;
  let result = fn.apply(obj, args);
  return result instanceof Object ? result : obj;
}