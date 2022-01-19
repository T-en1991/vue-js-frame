import Vue from 'vue'
import Vuex from 'vuex'
import state from './states'
import mutations from './mutations'
import actions from './actions'
import modules from './modules/index'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const vuexPersisted=new createPersistedState({
  key:'demo',
  storage:window.localStorage//window.sessionStorage,存储在哪里
  // reducer:state=>{
  //   //指定存储的数据，不写，默认全部
  //   demo:state.demo
  // }
})

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules,
  plugins:[vuexPersisted]
})
