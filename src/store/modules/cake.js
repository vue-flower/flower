import { SAVE_PROVINCE, SAVE_CITIES,SAVE_Region,SAVE_Cake } from '../mutations-types'
import { reqAllProvince,reqCityByProvince,reqCountiesByProvinceAndCity,reqCakeList } from '../../api'

const state = {
  allProvince: [],
  cities: [],
  regions: [],
  cakes: []
}
const mutations = {
  [SAVE_PROVINCE](state,allProvince){
    state.allProvince = allProvince
  },
  [SAVE_CITIES](state,cities){
    state.cities = cities
  },
  [SAVE_Region](state,regions){
    console.log(111)
    state.regions = regions
  },
  [SAVE_Cake](state,cakes){
    console.log(111)
    state.cakes = cakes.slice(0,20)
  }
}
const actions = {
  async getAllProvince({commit}){
    // 1.发送请求获取数据
    let result = await reqAllProvince()
    // 2.调用mutation，数据交给mutation
    if(result.state === 1){
      commit(SAVE_PROVINCE,result.data)
    } 
  },
  async getCities({commit},province){
    // 1.发送请求获取数据
    let result = await reqCityByProvince(province)
    // 2.调用mutation，数据交给mutation
    if(result.state === 1){
      commit(SAVE_CITIES,result.data)
    } 
  },
  async getRegions({commit},pAndC){
    // 1.发送请求获取数据
    let result = await reqCountiesByProvinceAndCity(pAndC[0],pAndC[1])
    // 2.调用mutation，数据交给mutation
    if(result.state === 1){
      console.log(1111)
      commit(SAVE_Region,result.data)
    } 
  },
  async getCakeList({commit}){
    // 1.发送请求获取数据
    let result = await reqCakeList()
    // 2.调用mutation，数据交给mutation
    console.log(result)
    if(result.Status === '0'){
      commit(SAVE_Cake,result.Datas.ProductPrices)
    } 
  }
}
const getters = {

}

export default  {
  state,
  mutations,
  actions,
  getters,
}