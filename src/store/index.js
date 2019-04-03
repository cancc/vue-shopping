import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
 new Vuex.Store({
  state: {
    numBox: 1
  },
  mutations: {
    add(state) {
      state.numBox++
    },
    subtract(state) {
      state.numBox--
    }
  }
})