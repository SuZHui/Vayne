import Vue from 'vue'
import App from './App'
import Vayne from 'vayne/ui'

Vue.config.performance = true

Vue.use(Vayne)

const vm = new Vue({
  data: () => ({ isLoaded: document.readyState === 'complete' }),
  render(h) {
    return this.isLoaded ? h(App): undefined
  }
}).$mount(`#app`)

vm.isLoaded || window.addEventListener('load', () => {
  vm.isLoaded = true
})
