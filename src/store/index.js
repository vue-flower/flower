import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'




import flower from './modules/flower'
import cake from './modules/cake'
import floor from './modules/floor'
import limit from './modules/limit'
import yongshenghua from './modules/yongshenghua'

Vue.use(Vuex)


const store =  new Vuex.Store({
  modules:{
    yongshenghua,
    flower,
    cake,
    floor,
    limit
  },
  state,
  mutations,
  actions,
  getters,
})

export default store
