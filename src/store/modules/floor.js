import { SAVE_FLOOR } from '../mutations-types'
import { reqFloor} from '../../api'
import {chunk} from 'lodash/array'

const state = {
  floorList:[]
}
const mutations = {
  [SAVE_FLOOR](state,floorList){
    state.floorList = floorList
  }
}
const actions = {
  async getFloor({commit}){
    // 1.发送请求获取数据
    let result = await reqFloor()
    // 2.调用mutation，数据交给mutation
    if(result.Status === '0'){
      commit(SAVE_FLOOR,result.Datas.ProductPrices)
    } 
  }
}
const getters = {
  chunkFloorList(state){
    return chunk(state.floorList,8)
  },
}

export default  {
  state,
  mutations,
  actions,
  getters,
}