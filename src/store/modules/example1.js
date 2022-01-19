const example1={
  namespaced:true,
  state:{
    example1:'example1'
  },
  mutations:{
    changeExample1(state, data){
      state.example1= data
    }
  },
  actions:{
    ActionExample1(context){
      context.commit('changeExample1')
    }
  },
  getters:{
    getterExample1(state){
      return 'Getter'+state.example1
    }
  }
}

export default example1
