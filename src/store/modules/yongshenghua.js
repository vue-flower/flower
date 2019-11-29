import { SAVE_YONGSHENGHUA } from '../mutations-types'
import { reqYongshenghuaList} from '../../api'
const state = {
  yongshenghuaList:[]
}
const mutations = {
  [SAVE_YONGSHENGHUA](state,yongshenghuaList){
    state.yongshenghuaList = yongshenghuaList
  }
}
const actions = {
  async getYongshenghuaList({commit}){
    console.log('getLimyongshenghuaListit')
    // 1.发送请求获取数据
    let result = await reqYongshenghuaList()
    // 2.调用mutation，数据交给mutation
    if(result.Status === '0'){
      commit(SAVE_YONGSHENGHUA,result.Datas.ProductPrices)
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