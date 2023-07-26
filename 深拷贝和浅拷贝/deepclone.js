const isType = (val) => {
  return (type) => Object.prototype.toString.call(val) === `[object ${type}]`
}

function deepClone(obj) {
  let newobj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(obj[key])) {
      if (isType(obj[key])('Object')) {
        newobj[key] = deepClone(obj[key]);
      } else if (isType(obj[key])('Array')) {
        newobj[key] = [].concat([...deepClone(obj[key])]);
      } else {
        newobj[key] = obj[key];
      }
    }
  }

  return newobj;
}

let obj = {
  a: 1, 
  b: {
    a: 1,
  }
}
console.log(deepClone(obj))