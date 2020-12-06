import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    savedPosition:""
  },
  mutations: {
    savePosition(state,payload){
      state.savedPosition  = payload
    }

  },
  actions: {
  },
  modules: {
  }
})
