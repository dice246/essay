function test(arr) {
  let result = [];

  while (arr.length > 0) {
    let random = Math.floor(Math.random() * arr.length);
    result.push(arr[random]);
    arr.splice(random, 1)
  }

  return result;
}

// const dict = new Map();
// const cacheRequest = (url) => {
//   if (dict.has(url)) {
//     return Promise.resolve(dict.get(url))
//   } else {
//     return request(url).then(res => {
//       dict.set(url, res)
//       return res;
//     }).catch(err => Promise.reject(err))
//   }
// }

