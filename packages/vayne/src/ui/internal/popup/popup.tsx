import Vue, { VNode } from 'vue'
import Portal from '@/internal/portal'

interface PopupData {
  _container: null | HTMLElement,
  _visible: boolean
}

/**
 * The component float on the surface
 * 全局弹层
 */
const Popup = Vue.component<PopupData, any, any, any>('vi-popup', {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      _visible: false,
      _container: null
    }
  },
  methods: {
    getContainer() {
      if (!this._container) {
        this._container = document.createElement('div')
        document.body.append(this._container)
      }
    },
    removeContainer() {
      if (!this._container) {
        this._container.parentNode.removeChild(this._container)
        this._container = null
      }
    }
  },
  created() {
    this.getContainer()
  },
  beforeDestroy() {
    this.removeContainer()
  },
  render(): VNode {
    const { _visible, _container } = this
    return (
      <Portal container={_container}>
        <div>This is inside Portal</div>
      </Portal>
      )
  }
})

export default Popup
