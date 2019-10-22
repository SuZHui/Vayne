import Vue from 'vue'
export default Vue.component(
  'v-title',
  () => import(
    /* webpackChunkName:"v-title" */
    './Title'
  )
)