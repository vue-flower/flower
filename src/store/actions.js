  import {getProductPricesAction} from '../api'
  import {SAVE_PRODUCTPRICES} from "./mutation-type"
  export default {
  async getProductPricesAction({commit}){
    // 发送请求获取数据
    console.log(111)
     let result = await getProductPricesAction()
     if(result.Status === '0'){ 

       // 调用mutation,将数据交给mutation
       commit(SAVE_PRODUCTPRICES,{ProductPrices: result.Datas})
     }

  }

}