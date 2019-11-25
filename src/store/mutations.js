    import {
      SAVE_PRODUCTPRICES
    } from './mutations-types'
   
    export default {
      [SAVE_PRODUCTPRICES](state, {
        ProductPrices
      }) {
        state.ProductPrices = ProductPrices
      },
      [SAVE_TOKEN](state, {
        token
      }) {
        // 存储到本地localStorage || sessionStorage
        localStorage.setItem('token_key', JSON.stringify(token))
        state.token = token
      },
    }
    import {

      SAVE_USER,
      SAVE_TOKEN,
      LOGOUT
    } from './mutations-types'
