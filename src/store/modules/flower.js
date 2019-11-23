import { SAVE_FLOWER ,SAVE_YONGSHENGHUA } from '../mutations-types'
import { reqFlowerList, reqYongshenghuaList  } from '../../api'

const state = {
  flowerList: [],
  yongshenghuaList: []
}
const mutations = {
  [SAVE_YONGSHENGHUA](state,yongshenghuaList){
    state.yongshenghuaList = yongshenghuaList
  }
}
const actions = {
  async getYongshenghuaList({commit}){
    // 1.发送请求获取数据
    let result = await reqYongshenghuaList()
    // 2.调用mutation，数据交给mutation
    if(result.Status === '0'){
      commit(SAVE_YONGSHENGHUA,result.Datas.ProductPrices)
    } 
  }
}
const getters = {
  
}


export default {
  state,
  mutations,
  actions,
  getters
}