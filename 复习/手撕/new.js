function objectFactory(Constructor, ...args) {
  let obj = new Object();
  obj.__proto__ = Constructor.prototype;
  let ret = Constructor.apply(obj, ...args);

  return ret || obj;

}
