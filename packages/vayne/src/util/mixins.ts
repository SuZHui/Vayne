import Vue, { VueConstructor } from 'vue'

/**
 * Mix multiple vue construction options
 * 混合多个vue构造选项
 * @param {VueConstructor[]} args
 */
export default function mixins<T extends Vue>(...args: VueConstructor[]): VueConstructor<T>
export default function mixins(...args: VueConstructor[]): VueConstructor {
  return Vue.extend({ mixins: args })
}