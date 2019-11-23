import request from './ajax'

export const reqFlowerList = ()=> request.get('/flowerList')
//永生花页面
export const reqYongshenghuaList = ()=> request.get('yongshenghua')
