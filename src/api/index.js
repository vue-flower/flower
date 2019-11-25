import ajax from './ajax'

// 定义发送请求的方法

export const getProductPricesAction = () => ajax({
  url: '/details'
})

export const reqFlowerList = ()=> ajax.get('/flowerList')
//永生花页面
export const reqYongshenghuaList = ()=> ajax.get('yongshenghua')
