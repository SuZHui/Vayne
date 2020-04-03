import { VueConstructor } from 'vue';
import * as components from './components'

const Vayne = {
  install(Vue: VueConstructor, useOptions = {}) {

    (function (components: any) {
      if (components) {
        for (const key in components) {
          const component = components[key]
          if (component) {
            Vue.component(key, component as typeof Vue)
          }
        }
        return true
      }
      return false
    })(components)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vayne)
}

export default Vayne
