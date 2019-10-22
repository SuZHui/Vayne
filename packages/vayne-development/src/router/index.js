import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/page-one',
    component: () => import(
      /* webpackChunkName: "page-one" */
      '../page/pageOne'
    )
  },
  {
    path: '/page-two',
    component: () => import(
      /* webpackChunkName: "page-two" */
      '../page/pageTwo'
    )
  },
  {
    path: '/*',
    redirect: '/page-one'
  }
]

const router = new VueRouter({ routes })
export default router