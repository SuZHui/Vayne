import Vue from 'vue'
import App from './App'

Vue.config.performance = true

import Vayne from 'vayne'
Vayne()

const vm = new Vue({
  data: () => ({ isLoaded: document.readyState === 'complete' }),
  render(h) {
    return this.isLoaded ? h(App): undefined
  }
}).$mount(`#app`)

vm.isLoaded || window.addEventListener('load', () => {
  vm.isLoaded = true
})