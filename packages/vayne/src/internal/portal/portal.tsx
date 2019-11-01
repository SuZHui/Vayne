import Vue from 'vue'
import { CombinedVueInstance } from 'vue/types/vue'

interface PortalData {
  _vueInstance: CombinedVueInstance<any, any, any, any, any> | undefined
}

const Portal = Vue.component<PortalData, any, any, any>('vi-portal', {
  props: {
    // 被挂载的dom元素
    container: {
      type: HTMLElement,
      required: true
    }
  },
  data(): PortalData {
    return {
      _vueInstance: undefined
    }
  },
  methods: {
    renderComponent() {
      const { container, $slots } = this
      if (!this._vueInstance) {
        this._vueInstance = new Vue({
          el: container,
          // 在新开辟的出口渲染子组件
          render:() => $slots.default
        })
      }
    }
  },
  created() {
    this.renderComponent()
  },
  beforeDestroy() {
    this._vueInstance = undefined
  },
  render() {
    console.log('portal render start')
    return this.renderComponent()
  }
})

export default Portal
