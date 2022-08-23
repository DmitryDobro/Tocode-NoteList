import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    users:[
      {id:1,name:'alex', admin:true},
      {id:2,name:'fill', admin:true},
      {id:3,name:'sam', admin:false},
    ]
  },
  getters: {
    getUsers(state){
      return state.users
    },
    getUser(state){
      return state.user
    }
  },
  mutations: {
    setUser(state, payload) {
      console.log(payload);
      state.user = payload
    }
  },
  actions: {
    setUser(context, payload){
      context.commit('setUser', payload)
    },
  },
  modules: {
  }
})
