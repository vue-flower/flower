import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

import flower from './modules/flower'
import floor from './modules/floor'

Vue.use(Vuex)


const store =  new Vuex.Store({
  modules:{
    flower,
    floor
  },
  state,
  mutations,
  actions,
  getters,
})

export default store