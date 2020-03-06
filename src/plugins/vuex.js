// 1. 维护状态 state （响应式）
// 2. 修改状态 commit
// 3. 业务逻辑控制 dispatch
// 4. 状态派发 getter（响应式）
// 5. 混入

let Vue

function install(_Vue) {
  Vue = _Vue

  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store
      }
    },
  })
}

class Store {
  constructor(options) {
    this.state = new Vue({
      data: options.state,
    })

    this.mutations = options.mutations || {}
    this.actions = options.actions || {}

    options.getters && this.handleGetters(options.getters)
  }

  commit = (type, arg) => {
    // 如果不使用箭头函数，dispatch 中调用时 this 会改变
    // console.log(this)
    const fn = this.mutations[type]
    fn(this.state, arg)
  }

  dispatch(type, arg) {
    const fn = this.actions[type]
    return fn({ commit: this.commit, state: this.state }, arg)
  }

  // {foo(state){},doo(state){}}
  handleGetters(getters) {
    this.getters = {}

    // 定义只读属性和响应式
    Object.keys(getters).forEach((key) => {
      Object.defineProperty(this.getters, key, {
        get: () => {
          return getters[key](this.state)
        },
      })
    })
  }
}

export default { Store, install }
