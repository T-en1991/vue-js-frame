import Vue from 'vue'
import App from './App.vue'
import store from './store'
import '../src/router/guard/index'
import router from './router'
import EventBus from './utils/eventBus'

Vue.config.productionTip = false
window.$eventBus = new EventBus()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


//todo
// 1.vuex及其持久化     【ok】
// 2.路由权限     【ok】
// 3.request封装
// 4.环境
// 5.通用组件
// 6.eslint
// 7.webpack
// 8.插件
// 9.git hooks

