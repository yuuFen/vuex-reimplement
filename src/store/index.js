import Vue from 'vue'
import Vuex from '../plugins/vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1,
  },
  getters: {
    score(state) {
      return 'Score: ' + state.count * 2
    },
  },
  mutations: {
    add(state, num = 1) {
      state.count += num
    },
  },
  actions: {
    asyncAdd({ commit }, num = 1) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('add', num)
          resolve({ ok: 1 })
        }, 1000)
      })
    },
  },
})
