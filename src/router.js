import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import about from './components/about/index.vue'

const routes = [
  {path: '/', component: about}
]

export default new VueRouter({
    routes,
    mode: 'history'
  })
