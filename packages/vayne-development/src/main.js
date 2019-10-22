import Vue from 'vue'

import App from '@/App'
import router from './router'

import '@/style/common.scss'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// if (module.hot) {
//   module.hot.accept()
// }