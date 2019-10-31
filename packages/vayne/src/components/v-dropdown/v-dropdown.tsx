import Vue, { VNode } from 'vue'

const Dropdown = Vue.component(
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
    data() {
      return {
        // control components shown / hidden
        _visible: false
      }
    },
    methods: {
      /**
       * Render child elements,
       * if there are more than one child element, only the first one is shown
       * 渲染子元素，如果存在多个子元素，则只显示第一个
       */
      renderChildren() {
        const children = this.$slots.default && this.$slots.default[0]
        const { _visible } = this
        return _visible && children
          ? children // TODO: add classname of visible
          : children
      }
    },
    render(): VNode {
      return (
        <div>
          {this.renderChildren()}
        </div>
      )
    }
  }
)

export default Dropdown
