import { SAVE_LIMIT } from '../mutations-types'
import { reqLimit} from '../../api'
const state = {
  limitList:[]
}
const mutations = {
  [SAVE_LIMIT](state,limitList){
    state.limitList = limitList
  }
}
const actions = {
  async getLimit({commit}){
    console.log('getLimit')
    // 1.发送请求获取数据
    let result = await reqLimit()
    // 2.调用mutation，数据交给mutation
    if(result.Status === '0'){
      commit(SAVE_LIMIT,result.Datas.ProductPrices)
    } 
  }
}
const getters = {
  // chunkFloorList(state){
  //   return chunk(state.floorList,8)
  // },
}

export default  {
  state,
  mutations,
  actions,
  getters,
}