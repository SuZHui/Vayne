import Vue from 'vue'

/**
 * The component float on the surface
 * 全局弹层
 */
const Popup = Vue.component('vi-popup', {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      _visible: false
    }
  }
})

export default Popup
