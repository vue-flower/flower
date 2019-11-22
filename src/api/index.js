import request from './ajax'

export const reqFlowerList = ()=> request.get('/flowerList')
export const reqFloor = ()=> request.get('/floor')