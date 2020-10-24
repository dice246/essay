class Event {
  constructor(props) {
    this.listeners = {};
  }

  on (eventName, func) {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = []
    }

    this.listeners[eventName].push(func)
  }

  emit (eventName, ...args) {
    let fns = this.listeners[eventName];

    if (!fns || !fns.length) {
      return false;
    }

    fns.forEach(fn => fn.apply(this, args))
  }

  off (eventName, fn) {
    let fns = this.listeners[eventName];

    if (!fns) {
      return false
    }

    if (!fn) {
      fns.length = 0;
    } else {
      let idx = fns.findIndex(_fn => _fn === fn);
      idx !== -1 && fns.splice(idx, 1)
    }
  }

  once (eventName, fn) {
    let self = this;

    function one(...args) {
      fn.apply(this, args);

      self.off(eventName, one)
    }

    this.on(eventName, one)
  }

  removeAllListeners (event) {
    this.listeners[event] = []
  }
}
