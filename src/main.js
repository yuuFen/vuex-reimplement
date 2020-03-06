import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import store from './store'

new Vue({
  store,
  render: function (h) { return h(App) },
}).$mount('#app')
