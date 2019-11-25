import axios from 'axios'
import qs from 'qs'

// import { BASE_PATH } from '../config'


const instance = axios.create({
  timeout: 10000,
  baseURL: '/api',
  baseURL: BASE_PATH
})

// 添加请求拦截器
instance.interceptors.request.use(config => {
  if(config.method.toUpperCase() === 'POST' && config.data  instanceof Object){
    config.data = qs.stringify(config.data)
  }
    return config
})


// instance.interceptors.request.use(config => {
//   const {data} = config
//   if (data instanceof Object) { // 只要data是对象就转换
//     config.data = qs.stringify(data)
//   }
//   console.log('携带的参数',config)
//   return config
// })





// 添加响应拦截器
import { BASE_PATH } from '../config'
import  { Message  } from 'element-ui';

// const instance = axios.create({
//   timeout: 10000,
 
// })

// 配置请求拦截器


instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    const {status} = error.response
    loadingInstance.close()
    if(status === 404){
      alert('请求资源不存在')
      Message.error({
        message: '请求资源不存在',
        type: 'warning',
        duration:2000,
        center:true
      })

    }
    // 中断promise链
    return new Promise(()=>{})
  }
)



export default instance