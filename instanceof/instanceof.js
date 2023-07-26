function myInstanceof(left, right) {
  let proto = Object.getPrototypeOf(left);
  let prototype = right.prototype;
  while (proto) {
    if (proto === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  } 
  return false;
}

function Person() { };
var p = new Person();
console.log(myInstanceof(p, Object));