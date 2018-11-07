import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import about from './components/about/index.vue'
import blog from './components/blog/index.vue'

const routes = [
  {path: '/', component: about},
  {path: '/blog', component: blog}
]

export default new VueRouter({
    routes,
    mode: 'history'
  })
