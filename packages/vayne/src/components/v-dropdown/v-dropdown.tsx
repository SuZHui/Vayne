import Vue, { Component, VNode } from 'vue'

const Dropdown: Component = Vue.component(
  'v-dropdown',
  {
    props: {
      trigger: {
        type: Array,
        default: () => ['hover'],
        validator: function(value: string[]) {
          return value.every(v => ['hover','click','contextmenu'].indexOf(v) !== -1)
        }
      }
    },
    render(): VNode {
      return (<div>123</div>)
    }
  }
)

export default Dropdown
