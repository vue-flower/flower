import { SAVE_FLOWER,SAVE_SALE_SORT,SAVE_STAR } from '../mutations-types'
import { reqFlowerList } from '../../api'
import {chunk} from 'lodash/array'

const state = {
  flowerList: [],
  starFlower: []
}
const mutations = {
  [SAVE_FLOWER](state,flowerList){
    state.flowerList = chunk(flowerList,16)
  },
  [SAVE_SALE_SORT](state,isUp){
    if(isUp){
      // 升序
      console.log(111)
      let tmp = []
      state.flowerList.forEach((v1)=>{
        v1.forEach((v2)=>{
          tmp.push(v2)
        })
      })
      let result = tmp.sort((a,b) => {
        return b.sale - a.sale
      })
      state.flowerList = chunk(result,16)
    }else{
      // 降序
      console.log(222)
      let tmp = []
      state.flowerList.forEach((v1)=>{
        v1.forEach((v2)=>{
          tmp.push(v2)
        })
      })
      let result = tmp.sort((a,b) => {
        return a.sale - b.sale
      })
      state.flowerList = chunk(result,16)
    }
  },
  [SAVE_STAR](state,{flower,isStar}){
    flower = JSON.stringify(flower) //[{'sss':true}]
    if(isStar){
      state.starFlower.push({[flower]:isStar})
    }else{
      state.starFlower = state.starFlower.filter(item => {
        let keys = Object.keys(item)
        if(keys[0] !== flower){
          return item
        }
      })
    }
    // state.starFlower.push(flower)
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
  totalFlower(state){
    let length = 0
    state.flowerList.forEach(item => {
      length += item.length
    });
    return length
  },
  totalPage(state){
    return Math.ceil(state.flowerList.length*16 / 16)
  },
  hotFlowerList(state){
    let tmp = []
    state.flowerList.forEach((v1,index1)=>{
      v1.forEach((v2,index)=>{
        tmp.push(v2)
      })
    })
    return tmp.sort((a,b) => {
      return b.sale - a.sale
    }).slice(0,3)
  }
}

export default  {
  state,
  mutations,
  actions,
  getters,
}