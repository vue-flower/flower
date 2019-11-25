    import {
      SAVE_PRODUCTPRICES
    } from './mutation-type'
    export default {
      [SAVE_PRODUCTPRICES](state,{ProductPrices}){
         state.ProductPrices = ProductPrices
      }
    }