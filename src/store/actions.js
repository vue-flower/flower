  import {getProductPricesAction} from '../api'
  import {SAVE_PRODUCTPRICES} from "./mutations-types"


  export default {
  async getProductPricesAction({commit}){
    // 发送请求获取数据
    
     let result = await getProductPricesAction()
     if(result.Status === '0'){ 

       // 调用mutation,将数据交给mutation
       commit(SAVE_PRODUCTPRICES,{ProductPrices: result.Datas})
     }
  },
  async getUserAction({commit}, {user,pwd}){
    
    let result = await loginWithPassword(user,pwd)
    if(result.status === 0){
      commit(SAVE_TOKEN, {token: result.data})
    }
  },
  async autoLoginAction({commit}){
    let result = await autoLogin()
    if(result.code === 0){
      commit(SAVE_USER, {user: result.data})
    }
  }

}
import {loginWithPassword} from '../api'

import {
  SAVE_USER,
  SAVE_TOKEN
} from "./mutations-types";


