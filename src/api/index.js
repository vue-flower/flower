import request from './ajax'

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


