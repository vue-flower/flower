import { SAVE_FLOWER } from '../mutations-types'
import { reqFlowerList } from '../../api'
import {chunk} from 'lodash/array'

const state = {
  flowerList: []
}
const mutations = {
  [SAVE_FLOWER](state,flowerList){
    state.flowerList = flowerList
  }
}
const actions = {
  async getFlowerList({commit}){
    // 1.发送请求获取数据
    let result = await reqFlowerList()
    // 2.调用mutation，数据交给mutation
    if(result.Status === '0'){
      commit(SAVE_FLOWER,result.Datas.ProductPrices)
    } 
  }
}
const getters = {
  chunkFlowerList(state){
    return chunk(state.flowerList,16)
  },
  totalFlower(state){
    return state.flowerList.length
  },
  totalPage(state){
    return Math.ceil(state.flowerList.length/ 16)
  }
}

export default  {
  state,
  mutations,
  actions,
  getters,
}