function f1(arg) {
  console.log('f1: ', arg);
  return arg;
}

function f2(arg) {
  console.log('f2: ', arg);
  return arg;
}

function f3(arg) {
  console.log('f3: ', arg);
  return arg;
}

function f4(arg) {
  console.log('f4: ', arg);
  return arg;
}

function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => {
      return arg
    }
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce(
    (a,b) => {
      return (...args) => {
        console.log('a:', a)
        console.log('b:', b)
        return a(b(...args))
      }
    }
  )

  // return funcs.reduce((a,b) => (...args) =>
  //   a(b(...args))
  // )
}

console.log(compose(f1, f2, f3, f4)('omg'))




