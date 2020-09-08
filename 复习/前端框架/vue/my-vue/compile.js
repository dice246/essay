class Compile {
  constructor(el, vm) {
    this.$el = document.querySelector(el);
    this.$vm = vm;

    this.$fragment = this.node2Fragment(this.$el);
    this.compiler(this.$fragment);

    this.$el.appendChild(this.$fragment);
  }

  node2Fragment (el) {
    const fragment = document.createDocumentFragment();

    let child;


    while ((child = el.firstChild)) {
      fragment.appendChild(child)
    }

    return fragment;
  }

  compiler (node) {
    const child = node.childNodes;

    Array.from(child).forEach(node => {
      if (node.nodeType === 1) {
        this.compileElement(node);
      } else if (this.isInter(node)) {
        this.compileText(node);
      }

      if (node.childNodes && node.childNodes.length > 0) {
        this.compiler(node);
      }
    })
  }

  isInter(node) {
    return node.nodeType == 3 && /\{\{(.*)\}\}/.test(node.textContent);
  }

  compileElement (node) {
    const nodeAttrs = node.attributes;

    Array.from(nodeAttrs).forEach(attr => {
      const name = attr.name;
      const key = attr.value;

      if (this.isDirective(name)) {
        const dir = name.substring(2);

        this[dir] && this[dir](node, key);
      }

      if (this.isEvent(name)) {
        const dir = name.substring(1);

        this.eventHandler(node, key, dir);
      }
    })

  }

  isDirective (name) {
    return name.indexOf('k-') === 0;
  }

  isEvent(name) {
    return name.indexOf('@') === 0;
  }

  // 文本节点
  compileText (node) {
    const key = RegExp.$1;

    this.update(node, key, 'text');
  }

  eventHandler(node, key, dir) {
    let fn = this.$vm.$options.methods && this.$vm.$options.methods[key];

    if (fn && dir) {
      node.addEventListener(dir, () => {
        fn.call(this.$vm);
      })
    }
  }

  update (node, key , dir) {
    const updator = this[dir + 'Updator'];

    updator && updator(node, this.$vm[key]);

    // 创建watcher实例，依赖收集
    new Watcher(this.$vm, key, function (value) {
      updator && updator(node, value);
    })
  }

  textUpdator (node, value) {
    node.textContent = value;
  }

  htmlUpdator (node, value) {
    node.innerHTML = value;
  }

  modelUpdator (node, value) {
    node.value = value;
  }

  // 指令: v-text
  text(node, exp) {
    this.update(node, exp, 'text')
  }

  html(node, exp) {
    this.update(node, exp, 'html')
  }

  model(node, exp) {
    this.update(node, exp, 'model')

    node.addEventListener('input', (e) => {
      this.$vm[exp] = e.target.value;
    })
  }
}
