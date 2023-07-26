Object.prototype.myCreate = function (proto, propertyObject = undefined) {
  function F() {}
  F.prototype = proto;
  F.prototype.constructor = F;
  const obj = new F();
  if (propertyObject != undefined) {
    Object.defineProperty(obj, propertyObject);
  }
  if (proto === null) {
    obj.__proto__ = null;
  }

  return obj;
};
