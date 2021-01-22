import { inspect } from '@xstate/inspect' //  XState visualizer

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

inspect({
  // options
  // url: 'https://statecharts.io/inspect', // (default)
  iframe: false, // open in new window
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
