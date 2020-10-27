Function.prototype.myBind = function (context, ...other) {
  let self = this;

  return function (...args) {
    return self.apply(context, [...other, ...args])
  }
}
