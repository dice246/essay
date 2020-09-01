let Vue;

function install(_Vue) {
  Vue = _Vue;

  // 混入：把store选项指定到Vue原型上
  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
    }
  });
}

class Store {
  // options:  {state:{count:0}, mutations: {count(state){}}}
  constructor(options = {}) {
    // 利用vue数据响应式
    this.state = new Vue({
      data: options.state
    })

    // 初始化mutaions
    this.mutations = options.mutations || {};
    this.actions = options.actions || {};
    this.getters = {};

    options.getters && this.handleGetters(options.getters)
  }

  // 触发mutations，需要实现commit
  commit = (type, arg) => {
    // this指向Store实例
    const fn = this.mutations[type]; //获取变更函数
    fn(this.state, arg)
  }

  dispatch = (type, arg) => {
    const fn = this.actions[type];
    return fn({ commit: this.commit, state: this.state}, arg);
  }

  handleGetters(getters) {
    this.getters = {}

    Object.keys(getters).forEach(key => {
      Object.defineProperty(this.getters, key, {
        get: () => {  // 必须用箭头函数，否则this丢失
          return getters[key](this.state)
        }
      })
    })
  }
}
// Vuex
export default { Store, install };
