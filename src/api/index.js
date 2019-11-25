import ajax from './ajax'

// 定义发送请求的方法

export const getProductPricesAction = () => ajax({
  url: '/details'
})