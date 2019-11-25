import axios from 'axios'
import qs from 'qs'

// import { BASE_PATH } from '../config'


const instance = axios.create({
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
    console.log('请求失败')
    return new Promise(() => {})
  }
)



export default instance