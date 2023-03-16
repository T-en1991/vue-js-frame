import Vue from 'vue'
import App from './App.vue'
import store from './store'
import '../src/router/guard/index'
import router from './router'
import EventBus from './utils/eventBus'
import './icons/index' // icon
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import '../src/styles/index.less'

Vue.use(ElementUI)

Vue.config.productionTip = false
window.$eventBus = new EventBus()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
