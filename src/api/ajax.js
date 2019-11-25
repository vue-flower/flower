import axios from 'axios'
import qs from 'qs'

// import { BASE_PATH } from '../config'


const instance = axios.create({
  timeout: 10000,
  baseURL: '/api'
})

// 添加请求拦截器
instance.interceptors.request.use(config => {
  if(config.method.toUpperCase() === 'POST' && config.data  instanceof Object){
    config.data = qs.stringify(config.data)
  }
    return config
})

// 添加响应拦截器
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