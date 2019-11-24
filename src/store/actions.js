import {loginWithPassword} from '../api'

import {

  SAVE_USER,
  SAVE_TOKEN
} from "./mutations-types";

export default {

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
