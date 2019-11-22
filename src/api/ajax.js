import axios from 'axios'

import { BASE_PATH } from '../config'
import { Loading } from 'element-ui';

const instance = axios.create({
  timeout: 10000,
  baseURL: BASE_PATH
})

// 配置请求拦截器
instance.interceptors.request.use(config => {
    return config
})

instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    const {status} = error.response
    loadingInstance.close()
    if(status === 404){
      alert('请求资源不存在')
    }
    // 中断promise链
    return new Promise(()=>{})
  }
)



export default instance