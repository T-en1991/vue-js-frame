import Vue from 'vue'
// eslint-disable-next-line no-unused-vars
const mutations={
  setDemo(state, data) {
    Vue.set(state, 'demo', data)
  }
}

// const mutations={
//   setDemo(state, data) {
//    state.demo=data
//   }
// }
export default mutations
