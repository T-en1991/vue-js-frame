const example2={
  namespaced:true,
  state:{
    example2:'example2'
  },
  mutations:{
    changeExample2(state, data){
      state.example1= data
    }
  },
  actions:{
    ActionExample2(context){
      context.commit('changeExample2')
    }
  },
  getters:{
    getterExample2(state){
      return 'Getter'+state.example2
    }
  }
}

export default example2
