/**
 * 防抖常应用于用户进行搜索输入节约请求资源，window触发resize事件时进行防抖只触发一次。
 * @param fn
 * @param wait
 * @returns {function(...[*]=)}
 */
function debounce(fn, wait = 500) {
  let timer = null;

  return function (...args) {
    clearTimeout(timer)

    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait)
  }
}

/**
 * 节流常应用于鼠标不断点击触发、监听滚动事件。
 * @param fn
 * @param wait
 * @returns {function(...[*]=)}
 */
function throttle(fn, wait = 500) {
  let timer = null;

  return function (...args) {
    if (timer) {
      return;
    }

    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, wait)
  }
}
