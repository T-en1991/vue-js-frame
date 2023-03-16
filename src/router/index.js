import Vue from 'vue'
import VueRouter from 'vue-router'
import cRoute from './routersConst'// 常量
// import pRoute from './routersPermission'

Vue.use(VueRouter)

const routes = [...cRoute.data]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
