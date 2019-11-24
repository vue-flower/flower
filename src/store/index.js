import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'


import yongshenghua from './modules/yongshenghua'


Vue.use(Vuex)


const store =  new Vuex.Store({
  modules:{
    yongshenghua
  },
  state,
  mutations,
  actions,
  getters,
})

export default store