import {

  SAVE_USER,
  SAVE_TOKEN,
  LOGOUT
} from './mutations-types'

export default {
  // [SAVE_USER](state, {user}){
  //   state.user = user
  // },
  [SAVE_TOKEN](state, {token}){
    // 存储到本地localStorage || sessionStorage
    localStorage.setItem('token_key', JSON.stringify(token))
    state.token = token
  },
  
  // [LOGOUT](state){
  //   state.user = {}
  //   state.token = ''
  //   localStorage.removeItem('token_key')
  // },
  
  
  
}
