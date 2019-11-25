// import ajax from './ajax'

import request from './ajax'


// 定义发送请求的方法

export const getProductPricesAction = () => request({
  url: '/details'
})

// export const reqFlowerList = ()=> request.get('/flowerList')
//永生花页面
export const reqYongshenghuaList = ()=> request.get('yongshenghua')

export const reqFlowerList = ()=> request.get('/flowerList')

export const reqAllProvince = ()=> request.get('/get_all_province')

export const reqCityByProvince = (province)=> request({
  url:'/get_cities_by_province',
  method:'POST',
  data:{
    province
  }
})

export const reqCountiesByProvinceAndCity = (province,city)=> request({
  url:'get_counties_by_pro_and_city',
  method:'POST',
  data:{
    province,
    city
  }
})

export const reqCakeList = () => request.get('/cakeList')

export const reqFloor = () => request.get('/floor')

export const reqLimit = () => request.get('/limit')



/*  自动登录 */
// export const autoLogin = () => ajax({
//   url:'/auto_login',
//   headers: {
//     needToken: true
//   }
// })
 


/* 用户名密码登陆 */
export const loginWithPassword = (username, pwd) => request({
  url: '/login',
  method: 'POST',
  data: {
    username,
    pwd
  }
})
