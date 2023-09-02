Function.prototype.Mycall = function(context, ...args) {
  context = (!context) ? window : context;
  context._fn = this;
  let result = context._fn(...args);
  delete context._fn;
  return result;
}

Function.prototype.Myapply = function(context, args) {
  context = (!context) ? window : context;
  context._fn = this;
  let result = context._fn(...args);
  delete context._fn
  return result;
}

Function.prototype.Mybind = function(context, ...args) {
  context = (!context) ? window : context;
  let _this = this;
  return function(...args2) {
    context._fn = _this;
    let result = context._fn(...args, ...args2);
    delete context._fn;
    return result;
  }
}